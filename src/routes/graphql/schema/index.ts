import { createComment } from "./../mutations/comment-mutation";
import { getComments } from "./../query/comment-query";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      getComments,
    },
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: {
      createComment,
    },
  }),
});
