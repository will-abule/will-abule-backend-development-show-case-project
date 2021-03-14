import { Express, Response } from "express";
import helmet from "helmet";
import compression from "compression";
import joi from "joi";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { routes } from "./routes";
import { schema } from "../routes/graphql/schema/index";
import { logger } from "../startup/logging";

// @ts-ignore
import objectId from "joi-objectid";
//

export function init(app: Express) {
  // graphql setup

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.use(cors());

  objectId(joi);
  logger();
  routes(app);

  // middleware dependencies setup

  app.use(helmet());
  app.use(compression());

  app.get("/", function (_, res: Response) {
    res
      .status(200)
      .send("Welcome to Will Abule Backend Development Show Case Project!");
  });
}
