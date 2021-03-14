import {
  Post,
  validatePost,
  validatePostForUpdate,
} from "../../models/post-model";
import { isEmpty } from "../../utils/functions/empty-object-function";
import getResReq, {
  QueryInterface,
} from "mongodb-collection-query-with-mongoose";
import { postSelect } from "../../utils/functions/select-functions";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const query: QueryInterface = {
    filter: String(req.query.filter) === "true" ? true : false,
    sort: String(req.query.sort),
    sortName: String(req.query.sortName),
    pageSize: Number(req.query.pageSize),
    pageNumber: Number(req.query.pageNumber),
    ...(req?.query?.searchFilters && {
      searchFilters: String(req.query.searchFilters),
    }),
  };

  const response = await Promise.all([getResReq(query, Post, postSelect)]);
  const { data, type, msg, status } = response[0];
  if (type === "error")
    return res
      .status(status)
      .send({ message: `internal server error`, error: msg });

  return res.send(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id).select(postSelect);

  if (!post)
    return res
      .status(404)
      .send(
        `No Post with this ${req.params.id} was Found! please make sure you're sending the correct id`
      );

  // response to client

  return res.send(post);
});

router.post("/add", async (req: Request, res: Response) => {
  const empty = isEmpty(req.body);

  if (empty) return res.status(400).send("request body not provide!");

  if (req.body._id) delete req.body._id;
  if (req.body.link) delete req.body.link;

  // validating request body for requirements

  const { error } = validatePost(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const post = new Post({
    ...req.body,
    ...{ link: req.body.title.toLowerCase().replace(/ /g, "-") },
  });

  const result = await post.save();

  return res.send(result);
});

router.put("/update/:id", async (req: Request, res: Response) => {
  const empty = isEmpty(req.body);

  if (empty) return res.status(400).send("request body not provide!");

  const post = await Post.findById(req.params.id);
  if (!post)
    return res
      .status(404)
      .send(`No Post was found with the given id ${req.params.id}`);

  if (req.body._id) delete req.body._id;

  const { error } = validatePostForUpdate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const result = await Post.findByIdAndUpdate(post._id, {
    $set: req.body,
  });

  return res.send(result);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  if (!req.params.id) res.status(400).send("No id provided as a route params!");

  // finding and Deleting

  let data = await Post.findByIdAndDelete(req.params.id);

  if (!data) {
    res.status(404).send(`No Post was found with the given id ${req.query.id}`);
  } else {
    // Response to client

    res.send(data);
  }
});

export const postRoute = router;
