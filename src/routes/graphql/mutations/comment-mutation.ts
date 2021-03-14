import { GraphQLString } from "graphql";
import { Post } from "../../../models/post-model";
import { Comment } from "../../../models/comment-model";
import { CommentRequestType } from "../type-definitions/comment-definition";

export const createComment = {
  type: CommentRequestType,
  args: {
    postId: { type: GraphQLString },
    comment: { type: GraphQLString },
  },
  resolve: async (_: any, args: any) => {
    try {
      const post = await Post.findById(args.postId);

      if (!post)
        return {
          status: 400,
          message: `No post with this id ${args.postId} was found!`,
        };

      const comment = new Comment(args);

      const result = await comment.save();

      return { status: 200, data: result };
    } catch (error) {
      return {
        status: 500,
        error,
      };
    }
  },
};
