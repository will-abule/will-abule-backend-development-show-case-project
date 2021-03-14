import { middlewareErrorHandler } from "./../middleware/error-middleware";
import { Express } from "express";
import { postRoute } from "../routes/rest/post-route";

export const routes = async (app: Express) => {
  app.use("/api/post", postRoute);

  app.use(middlewareErrorHandler);
};
