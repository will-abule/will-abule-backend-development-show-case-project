import Joi, { ValidationResult } from "joi";
import { Schema, model } from "mongoose";
import {
  PostInterface,
  PostUpdateInterface,
} from "../utils/interface/post-interface";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: [
        {
          url: String,
          cover: Boolean,
        },
      ],
      required: true,
    },
    meta: {
      type: {
        author: String,
        authorProfilePicture: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Post = model("Post", postSchema);

export function validatePost(Post: PostInterface): ValidationResult {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    images: Joi.array()
      .items({
        url: Joi.string().uri().required(),
        cover: Joi.boolean().required(),
      })
      .required(),
    meta: Joi.object().keys({
      author: Joi.string().required(),
      authorProfilePicture: Joi.string().uri().required(),
    }),
  });

  return schema.validate(Post);
}

export function validatePostForUpdate(
  Post: PostUpdateInterface
): ValidationResult {
  const schema = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    images: Joi.array().items({
      url: Joi.string().uri().required(),
      cover: Joi.boolean().required(),
    }),
    meta: Joi.object().keys({
      author: Joi.string().required(),
      authorProfilePicture: Joi.string().uri().required(),
    }),
  });

  return schema.validate(Post);
}
