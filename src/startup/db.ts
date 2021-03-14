import { Express } from "express";
import config from "config";
import mongoose from "mongoose";
import { init } from "./init";

export const mongoDBConnect = {
  connect: async (app: Express) => {
    const db: string = config.get("db");
    mongoose.Promise = Promise;
    try {
      const connected = await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        reconnectTries: 60,
      });

      if (connected) {
        console.log(`Connected to ${db}`);

        init(app);
      }
    } catch (ex) {
      console.log(`Could not Connect to ${db}`);
      console.log(ex);
      process.exit(1);
    }
  },

  disconnect: async () => {
    await mongoose.connection.close(true);
  },
};
