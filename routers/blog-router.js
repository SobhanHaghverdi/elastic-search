import { Router } from "express";
import blogController from "../controllers/blog-controller.js";

const blogRouter = Router();
blogRouter.post("/", blogController.create);

export default blogRouter;
