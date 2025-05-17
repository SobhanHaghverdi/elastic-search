import elasticClient from "../config/elastic-config.js";

async function create(req, res) {
  const { title, author, text } = req.body;

  const result = await elasticClient.index({
    index: "blog",
    document: {
      text,
      title,
      author,
    },
  });

  return res.json(result);
}

const blogController = { create };
export default blogController;
