"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostForUpdate = exports.validatePost = exports.Post = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.Post = mongoose_1.model("Post", postSchema);
function validatePost(Post) {
    const schema = joi_1.default.object({
        title: joi_1.default.string().required(),
        content: joi_1.default.string().required(),
        images: joi_1.default.array()
            .items({
            url: joi_1.default.string().uri().required(),
            cover: joi_1.default.boolean().required(),
        })
            .required(),
        meta: joi_1.default.object().keys({
            author: joi_1.default.string().required(),
            authorProfilePicture: joi_1.default.string().uri().required(),
        }),
    });
    return schema.validate(Post);
}
exports.validatePost = validatePost;
function validatePostForUpdate(Post) {
    const schema = joi_1.default.object({
        title: joi_1.default.string(),
        content: joi_1.default.string(),
        images: joi_1.default.array().items({
            url: joi_1.default.string().uri().required(),
            cover: joi_1.default.boolean().required(),
        }),
        meta: joi_1.default.object().keys({
            author: joi_1.default.string().required(),
            authorProfilePicture: joi_1.default.string().uri().required(),
        }),
    });
    return schema.validate(Post);
}
exports.validatePostForUpdate = validatePostForUpdate;
//# sourceMappingURL=post-model.js.map