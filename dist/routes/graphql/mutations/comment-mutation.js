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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = void 0;
const graphql_1 = require("graphql");
const post_model_1 = require("../../../models/post-model");
const comment_model_1 = require("../../../models/comment-model");
const comment_definition_1 = require("../type-definitions/comment-definition");
exports.createComment = {
    type: comment_definition_1.CommentRequestType,
    args: {
        postId: { type: graphql_1.GraphQLString },
        comment: { type: graphql_1.GraphQLString },
    },
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = yield post_model_1.Post.findById(args.postId);
            if (!post)
                return {
                    status: 400,
                    message: `No post with this id ${args.postId} was found!`,
                };
            const comment = new comment_model_1.Comment(args);
            const result = yield comment.save();
            return { status: 200, data: result };
        }
        catch (error) {
            return {
                status: 500,
                error,
            };
        }
    }),
};
//# sourceMappingURL=comment-mutation.js.map