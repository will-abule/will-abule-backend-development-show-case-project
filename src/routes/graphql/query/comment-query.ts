import { CommentResponseType } from "./../type-definitions/comment-definition";
import { GraphQLScalarType } from "graphql";
import { validateQuery } from "../../../utils/functions/query-validator-function";
import getResReq from "mongodb-collection-query-with-mongoose";
import { Comment } from "../../../models/comment-model";
import { commentSelect } from "../../../utils/functions/select-functions";

const RequestQuery = new GraphQLScalarType({
  name: "RequestQuery",
  description: "RequestQuery object validator",
  serialize: () => validateQuery,
});

export const getComments = {
  type: CommentResponseType,
  args: { query: { type: RequestQuery } },
  resolve: async (_: any, args: any) => {
    try {
      const response = await Promise.all([
        getResReq(args.query, Comment, commentSelect),
      ]);
      const { data, type, msg } = response[0];
      if (type === "error")
        return {
          status: 500,
          message: `internal server error`,
          error: msg,
        };

      return { status: 200, data };
    } catch (error) {
      return {
        status: 500,
        error,
      };
    }
  },
};
