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
exports.getComments = void 0;
const comment_definition_1 = require("./../type-definitions/comment-definition");
const graphql_1 = require("graphql");
const query_validator_function_1 = require("../../../utils/functions/query-validator-function");
const mongodb_collection_query_with_mongoose_1 = __importDefault(require("mongodb-collection-query-with-mongoose"));
const comment_model_1 = require("../../../models/comment-model");
const select_functions_1 = require("../../../utils/functions/select-functions");
const RequestQuery = new graphql_1.GraphQLScalarType({
    name: "RequestQuery",
    description: "RequestQuery object validator",
    serialize: () => query_validator_function_1.validateQuery,
});
exports.getComments = {
    type: comment_definition_1.CommentResponseType,
    args: { query: { type: RequestQuery } },
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield Promise.all([
                mongodb_collection_query_with_mongoose_1.default(args.query, comment_model_1.Comment, select_functions_1.commentSelect),
            ]);
            const { data, type, msg } = response[0];
            if (type === "error")
                return {
                    status: 500,
                    message: `internal server error`,
                    error: msg,
                };
            return { status: 200, data };
        }
        catch (error) {
            return {
                status: 500,
                error,
            };
        }
    }),
};
//# sourceMappingURL=comment-query.js.map