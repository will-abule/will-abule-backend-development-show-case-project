"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareErrorHandler = void 0;
const winston_1 = __importDefault(require("winston"));
const middlewareErrorHandler = (err, _, __, next) => {
    if (process.env.NODE_ENV !== "production") {
        console.log("Error Middleware: ->", err);
    }
    else {
        winston_1.default.error(err.message, err);
    }
    next();
};
exports.middlewareErrorHandler = middlewareErrorHandler;
//# sourceMappingURL=error-middleware.js.map