import { Router } from "express";
import indicesRouter from "./indices-router.js";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  return res.render("pages/index", { message: "Hello Express" });
});

mainRouter.use("/indexes", indicesRouter);

export default mainRouter;
