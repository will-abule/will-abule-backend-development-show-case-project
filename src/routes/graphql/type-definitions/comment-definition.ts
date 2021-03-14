import { dynamicResponse } from "./../../../utils/functions/query-validator-function";
import { GraphQLObjectType, GraphQLString } from "graphql";

export const CommentRequestType = new GraphQLObjectType({
  name: "CommentRequestType",
  fields: () => ({
    postId: { type: GraphQLString },
    comment: { type: GraphQLString },
    ...dynamicResponse,
  }),
});

export const CommentResponseType = new GraphQLObjectType({
  name: "CommentResponseType",
  fields: () => dynamicResponse,
});
