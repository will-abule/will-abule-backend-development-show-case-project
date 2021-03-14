import { port, server } from "./../index";
import express from "express";
import { Post } from "../models/post-model";
import { mongoDBConnect } from "../startup/db";
import { QueryInterface } from "mongodb-collection-query-with-mongoose";
import request from "supertest";

const app = express();
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

const query: QueryInterface = {
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
    authorProfilePicture:
      "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo",
  },
  images: [
    {
      url:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      cover: true,
    },
    {
      url:
        "https://lh3.googleusercontent.com/ogw/ADGmqu91E9OHpXVoUIy7ASGCCjl3T6CkOj02NXFupAW2Fg=s64-c-mo",
      cover: false,
    },
    {
      url:
        "https://www.maketecheasier.com/assets/uploads/2017/09/Dummy-Text-Random-Example.jpg",
      cover: false,
    },
  ],
};

const updateContent = { content: "qwerty" };

describe("/api/post", () => {
  beforeAll(async () => {
    await mongoDBConnect.connect(app);
  });

  afterAll(async () => {
    await mongoDBConnect.disconnect();
  });

  beforeEach(() => {
    if (!server.listening) {
      server.listen(port, () =>
        console.info(`TEST - listening on port ${port}`)
      );
    }
  });

  afterEach(async () => {
    await Post.deleteMany();
    if (server.listening) {
      server.close();
    }
  });

  describe("GET /post", () => {
    it("should get the list of post return 200", async () => {
      const res = await request(server).get("/api/post").query(query);
      console.log(res.error);

      expect(res.status).toBe(200);
    });

    it("should return 400 no query params when getting the list of post", async () => {
      const res = await request(server).get("/api/post");
      expect(res.status).toBe(400);
    });
  });

  describe("GET /:id", () => {
    it("should get a role return 200", async () => {
      let post = new Post(postData);

      post = await post.save();

      const res = await request(server).get(`/api/post/${post._id}`);

      expect(res.status).toBe(200);
    });

    it("should return 404 if user not found", async () => {
      const res = await request(server).get(
        `/api/post/5be6b2993846c059c25c5181`
      );
      expect(res.status).toBe(404);
    });
  });

  describe("POST /add", () => {
    it("should return 200 registration is valid", async () => {
      const res = await request(server).post(`/api/post/add`).send(postData);
      expect(res.status).toBe(200);
    });

    it("should return 400 registration is valid", async () => {
      const res = await request(server).post(`/api/post/add`).send({});

      expect(res.status).toBe(400);
    });
  });

  describe("PUT /update/:id", () => {
    it("should return 200 post update is valid", async () => {
      let post = new Post(postData);

      post = await post.save();

      const res = await request(server)
        .put(`/api/post/update/${post._id}`)
        .send(updateContent);

      expect(res.status).toBe(200);
    });

    it("should return 404 post not found", async () => {
      const res = await request(server)
        .post(`/api/post/update/5be6b846556caf5ce406c646`)
        .send(updateContent);

      expect(res.status).toBe(404);
    });
  });

  describe("DELETE /:postId", () => {
    it("should delete the a post return 200", async () => {
      let post = new Post(postData);

      post = await post.save();

      const res = await request(server).delete(`/api/post/delete/${post._id}`);

      expect(res.status).toBe(200);
    });

    it("should return 404 if role not found", async () => {
      const res = await request(server).delete(
        `/api/post/delete/5be6b846556caf5ce406c646`
      );

      expect(res.status).toBe(404);
    });
  });
});
