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
exports.mongoDBConnect = void 0;
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));
const init_1 = require("./init");
exports.mongoDBConnect = {
    connect: (app) => __awaiter(void 0, void 0, void 0, function* () {
        const db = config_1.default.get("db");
        mongoose_1.default.Promise = Promise;
        try {
            const connected = yield mongoose_1.default.connect(db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                reconnectTries: 60,
            });
            if (connected) {
                console.log(`Connected to ${db}`);
                init_1.init(app);
            }
        }
        catch (ex) {
            console.log(`Could not Connect to ${db}`);
            console.log(ex);
            process.exit(1);
        }
    }),
    disconnect: () => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connection.close(true);
    }),
};
//# sourceMappingURL=db.js.map