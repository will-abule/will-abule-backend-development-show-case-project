import "express-async-errors";
import express from "express";
import { initConfig } from "./startup/config";
import { mongoDBConnect } from "./startup/db";

const app = express();

// setup files

app.use(express.json());

initConfig();
(async () => await mongoDBConnect.connect(app))();

export const port = process.env.PORT || 50011;

export const server = app.listen(port, () =>
  console.info(`listening on port ${port}`)
);
