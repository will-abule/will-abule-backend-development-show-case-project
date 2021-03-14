"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.port = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const config_1 = require("./startup/config");
const db_1 = require("./startup/db");
const app = express_1.default();
app.use(express_1.default.json());
config_1.initConfig();
(() => __awaiter(void 0, void 0, void 0, function* () { return db_1.mongoDBConnect.connect(app); }))();
exports.port = process.env.PORT || 50011;
exports.server = app.listen(exports.port, () => console.info(`listening on port ${exports.port}`));
//# sourceMappingURL=index.js.map