import { NextFunction, Request, Response } from "express";
import winston from "winston";

export const middlewareErrorHandler = (
  err: any,
  _: Request,
  __: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Error Middleware: ->", err);
  } else {
    //save error
    winston.error(err.message, err);
  }
  next();
};
