import Joi, { ValidationResult } from "joi";
import { Schema, model } from "mongoose";
import { CommentInterface } from "../utils/interface/comment-interface";

const commentSchema = new Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = model("Comment", commentSchema);

export function validateComment(Comment: CommentInterface): ValidationResult {
  const schema = Joi.object({
    postId: Joi.string().required(),
    comment: Joi.string().required(),
  });

  return schema.validate(Comment);
}
