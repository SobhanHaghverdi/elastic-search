import { Router } from "express";
const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  return res.render("pages/index", { message: "Hello Express" });
});

export default mainRouter;
