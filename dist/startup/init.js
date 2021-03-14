"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const joi_1 = __importDefault(require("joi"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const routes_1 = require("./routes");
const index_1 = require("../routes/graphql/schema/index");
const logging_1 = require("../startup/logging");
const joi_objectid_1 = __importDefault(require("joi-objectid"));
function init(app) {
    app.use("/graphql", express_graphql_1.graphqlHTTP({
        schema: index_1.schema,
        graphiql: true,
    }));
    app.use(cors_1.default());
    joi_objectid_1.default(joi_1.default);
    logging_1.logger();
    routes_1.routes(app);
    app.use(helmet_1.default());
    app.use(compression_1.default());
    app.get("/", function (_, res) {
        res
            .status(200)
            .send("Welcome to Will Abule Backend Development Show Case Project!");
    });
}
exports.init = init;
//# sourceMappingURL=init.js.map