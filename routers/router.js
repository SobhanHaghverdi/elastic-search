import { Router } from "express";
import blogRouter from "./blog-router.js";
import indicesRouter from "./indices-router.js";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  return res.render("pages/index", { message: "Hello Express" });
});

mainRouter.use("/blogs", blogRouter);
mainRouter.use("/indexes", indicesRouter);

export default mainRouter;
