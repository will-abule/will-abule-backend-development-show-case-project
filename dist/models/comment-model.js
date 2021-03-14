"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateComment = exports.Comment = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    postId: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Comment = mongoose_1.model("Comment", commentSchema);
function validateComment(Comment) {
    const schema = joi_1.default.object({
        postId: joi_1.default.string().required(),
        comment: joi_1.default.string().required(),
    });
    return schema.validate(Comment);
}
exports.validateComment = validateComment;
//# sourceMappingURL=comment-model.js.map