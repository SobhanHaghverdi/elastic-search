import createHttpError from "http-errors";
import elasticClient from "../config/elastic-config.js";

async function getAll(req, res) {
  const indices = await elasticClient.indices.getAlias();
  return res.json(Object.keys(indices).filter((key) => !/^\.+/.test(key)));
}

async function create(req, res) {
  const { indexName } = req.body;
  if (!indexName) throw createHttpError(400, "Index name must be defined");

  const result = await elasticClient.indices.create({ index: indexName });
  return res.json({ result, message: "Index created successfully" });
}

async function remove(req, res) {
  const { indexName } = req.params;
  if (!indexName) throw createHttpError(400, "Index name must be defined");

  const result = await elasticClient.indices.delete({ index: indexName });
  return res.json({ result, message: "Index removed successfully" });
}

const indicesController = { create, getAll, remove };
export default indicesController;
