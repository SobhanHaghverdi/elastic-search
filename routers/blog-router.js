import { Router } from "express";
import blogController from "../controllers/blog-controller.js";

const blogRouter = Router();

blogRouter.get("/", blogController.filter);
blogRouter.post("/", blogController.create);
blogRouter.patch("/:id", blogController.update);
blogRouter.delete("/:id", blogController.remove);

export default blogRouter;
