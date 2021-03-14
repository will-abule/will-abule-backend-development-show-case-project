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
const index_1 = require("./../index");
const express_1 = __importDefault(require("express"));
const post_model_1 = require("../models/post-model");
const db_1 = require("../startup/db");
const supertest_1 = __importDefault(require("supertest"));
const app = express_1.default();
const searchFilters = {
    searchOption: "OR",
    rules: [
        {
            field: "title",
            option: "cn",
            type: "string",
            data: "will",
        },
    ],
};
const query = {
    filter: true,
    pageSize: 10,
    pageNumber: 1,
    sort: "desc",
    sortName: "title",
    searchFilters: JSON.stringify(searchFilters),
};
const postData = {
    title: "Example Title",
    link: "example-title",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    meta: {
        author: "Will Abule",
        authorProfilePicture: "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo",
    },
    images: [
        {
            url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
            cover: true,
        },
        {
            url: "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo",
            cover: false,
        },
        {
            url: "https://www.maketecheasier.com/assets/uploads/2017/09/Dummy-Text-Random-Example.jpg",
            cover: false,
        },
    ],
};
const updateContent = { content: "qwerty" };
describe("/api/post", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.mongoDBConnect.connect(app);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.mongoDBConnect.disconnect();
    }));
    beforeEach(() => {
        if (!index_1.server.listening) {
            index_1.server.listen(index_1.port, () => console.info(`TEST - listening on port ${index_1.port}`));
        }
    });
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield post_model_1.Post.deleteMany();
        if (index_1.server.listening) {
            index_1.server.close();
        }
    }));
    describe("GET /post", () => {
        it("should get the list of post return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).get("/api/post").query(query);
            console.log(res.error);
            expect(res.status).toBe(200);
        }));
        it("should return 400 no query params when getting the list of post", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).get("/api/post");
            expect(res.status).toBe(400);
        }));
    });
    describe("GET /:id", () => {
        it("should get a role return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            let post = new post_model_1.Post(postData);
            post = yield post.save();
            const res = yield supertest_1.default(index_1.server).get(`/api/post/${post._id}`);
            expect(res.status).toBe(200);
        }));
        it("should return 404 if user not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).get(`/api/post/5be6b2993846c059c25c5181`);
            expect(res.status).toBe(404);
        }));
    });
    describe("POST /add", () => {
        it("should return 200 registration is valid", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).post(`/api/post/add`).send(postData);
            expect(res.status).toBe(200);
        }));
        it("should return 400 registration is valid", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).post(`/api/post/add`).send({});
            expect(res.status).toBe(400);
        }));
    });
    describe("PUT /update/:id", () => {
        it("should return 200 post update is valid", () => __awaiter(void 0, void 0, void 0, function* () {
            let post = new post_model_1.Post(postData);
            post = yield post.save();
            const res = yield supertest_1.default(index_1.server)
                .put(`/api/post/update/${post._id}`)
                .send(updateContent);
            expect(res.status).toBe(200);
        }));
        it("should return 404 post not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server)
                .post(`/api/post/update/5be6b846556caf5ce406c646`)
                .send(updateContent);
            expect(res.status).toBe(404);
        }));
    });
    describe("DELETE /:postId", () => {
        it("should delete the a post return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            let post = new post_model_1.Post(postData);
            post = yield post.save();
            const res = yield supertest_1.default(index_1.server).delete(`/api/post/delete/${post._id}`);
            expect(res.status).toBe(200);
        }));
        it("should return 404 if role not found", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(index_1.server).delete(`/api/post/delete/5be6b846556caf5ce406c646`);
            expect(res.status).toBe(404);
        }));
    });
});
//# sourceMappingURL=post-rest-api-route.test.js.map