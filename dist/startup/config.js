"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfig = void 0;
const config_1 = __importDefault(require("config"));
function initConfig() {
    if (!config_1.default.get("db")) {
        throw new Error("FATAL ERROR: db is not defined.");
    }
    if (!config_1.default.get("env")) {
        throw new Error("FATAL ERROR: NODE_ENV is not defined.");
    }
}
exports.initConfig = initConfig;
//# sourceMappingURL=config.js.map