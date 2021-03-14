"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const config_1 = __importDefault(require("config"));
const winston_1 = __importDefault(require("winston"));
require("winston-mongodb");
const logger = () => {
    winston_1.default.add(new winston_1.default.transports.MongoDB({
        db: config_1.default.get("db"),
        level: "info",
    }));
    process.on("uncaughtException", (ex) => {
        if (process.env.NODE_ENV !== "production") {
            console.error(ex);
        }
        else {
            throw ex;
        }
    });
    process.on("unhandledRejection", (ex) => {
        if (process.env.NODE_ENV !== "production") {
            console.error(ex);
        }
        else {
            throw ex;
        }
    });
};
exports.logger = logger;
//# sourceMappingURL=logging.js.map