import elasticClient from "../config/elastic-config.js";

async function filter(req, res) {
  const { search = undefined } = req.query;
  const filterCondition = { index: "blog" };

  if (search) {
    filterCondition.query = {
      bool: {
        should: [
          { regexp: { text: `.*${search}.*` } },
          { regexp: { title: `.*${search}.*` } },
          { regexp: { author: `.*${search}.*` } },
        ],
      },
    };
  }

  const blogs = await elasticClient.search(filterCondition);
  return res.json(blogs.hits.hits);
}

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

async function update(req, res) {
  const result = await elasticClient.update({
    index: "blog",
    doc: req.body,
    id: req.params.id,
  });

  return res.json(result);
}

async function remove(req, res) {
  const result = await elasticClient.deleteByQuery({
    index: "blog",
    query: { match: { _id: req.params.id } },
  });

  return res.json(result);
}

const blogController = { create, remove, filter, update };
export default blogController;
