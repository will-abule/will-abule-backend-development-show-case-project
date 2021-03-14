import config from "config";
import winston from "winston";
import "winston-mongodb";

export const logger = () => {
  winston.add(
    new winston.transports.MongoDB({
      db: config.get("db"),
      level: "info",
    })
  );

  process.on("uncaughtException", (ex) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(ex);
    } else {
      throw ex;
    }
  });

  process.on("unhandledRejection", (ex) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(ex);
    } else {
      throw ex;
    }
  });
};
