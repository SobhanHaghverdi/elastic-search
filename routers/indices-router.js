import { Router } from "express";
import indicesController from "../controllers/indices-controller.js";

const indicesRouter = Router();

indicesRouter.get("/", indicesController.getAll);
indicesRouter.post("/", indicesController.create);
indicesRouter.delete("/:indexName", indicesController.remove);

export default indicesRouter;
