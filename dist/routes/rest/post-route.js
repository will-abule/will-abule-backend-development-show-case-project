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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoute = void 0;
const post_model_1 = require("../../models/post-model");
const empty_object_function_1 = require("../../utils/functions/empty-object-function");
const mongodb_collection_query_with_mongoose_1 = __importDefault(require("mongodb-collection-query-with-mongoose"));
const select_functions_1 = require("../../utils/functions/select-functions");
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const query = Object.assign({ filter: String(req.query.filter) === "true" ? true : false, sort: String(req.query.sort), sortName: String(req.query.sortName), pageSize: Number(req.query.pageSize), pageNumber: Number(req.query.pageNumber) }, (((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.searchFilters) && {
        searchFilters: String(req.query.searchFilters),
    }));
    const response = yield Promise.all([mongodb_collection_query_with_mongoose_1.default(query, post_model_1.Post, select_functions_1.postSelect)]);
    const { data, type, msg, status } = response[0];
    if (type === "error")
        return res
            .status(status)
            .send({ message: `internal server error`, error: msg });
    return res.send(data);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_model_1.Post.findById(req.params.id).select(select_functions_1.postSelect);
    if (!post)
        return res
            .status(404)
            .send(`No Post with this ${req.params.id} was Found! please make sure you're sending the correct id`);
    return res.send(post);
}));
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empty = empty_object_function_1.isEmpty(req.body);
    if (empty)
        return res.status(400).send("request body not provide!");
    if (req.body._id)
        delete req.body._id;
    if (req.body.link)
        delete req.body.link;
    const { error } = post_model_1.validatePost(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const post = new post_model_1.Post(Object.assign(Object.assign({}, req.body), { link: req.body.title.toLowerCase().replace(/ /g, "-") }));
    const result = yield post.save();
    return res.send(result);
}));
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empty = empty_object_function_1.isEmpty(req.body);
    if (empty)
        return res.status(400).send("request body not provide!");
    const post = yield post_model_1.Post.findById(req.params.id);
    if (!post)
        return res
            .status(404)
            .send(`No Post was found with the given id ${req.params.id}`);
    if (req.body._id)
        delete req.body._id;
    const { error } = post_model_1.validatePostForUpdate(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const result = yield post_model_1.Post.findByIdAndUpdate(post._id, {
        $set: req.body,
    });
    return res.send(result);
}));
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id)
        res.status(400).send("No id provided as a route params!");
    let data = yield post_model_1.Post.findByIdAndDelete(req.params.id);
    if (!data) {
        res.status(404).send(`No Post was found with the given id ${req.query.id}`);
    }
    else {
        res.send(data);
    }
}));
exports.postRoute = router;
//# sourceMappingURL=post-route.js.map