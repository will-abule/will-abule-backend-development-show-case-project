"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const comment_mutation_1 = require("./../mutations/comment-mutation");
const comment_query_1 = require("./../query/comment-query");
const graphql_1 = require("graphql");
exports.schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "RootQuery",
        fields: {
            getComments: comment_query_1.getComments,
        },
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: "RootMutation",
        fields: {
            createComment: comment_mutation_1.createComment,
        },
    }),
});
//# sourceMappingURL=index.js.map