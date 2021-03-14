"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResponseType = exports.CommentRequestType = void 0;
const query_validator_function_1 = require("./../../../utils/functions/query-validator-function");
const graphql_1 = require("graphql");
exports.CommentRequestType = new graphql_1.GraphQLObjectType({
    name: "CommentRequestType",
    fields: () => (Object.assign({ postId: { type: graphql_1.GraphQLString }, comment: { type: graphql_1.GraphQLString } }, query_validator_function_1.dynamicResponse)),
});
exports.CommentResponseType = new graphql_1.GraphQLObjectType({
    name: "CommentResponseType",
    fields: () => query_validator_function_1.dynamicResponse,
});
//# sourceMappingURL=comment-definition.js.map