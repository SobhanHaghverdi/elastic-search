import { Client } from "@elastic/elasticsearch";
const { ELASTIC_USER_NAME, ELASTIC_PASSWORD, ELASTIC_HOST } = process.env;

const elasticClient = new Client({
  node: ELASTIC_HOST,
  tls: { rejectUnauthorized: false },
  auth: { username: ELASTIC_USER_NAME, password: ELASTIC_PASSWORD },
});

export default elasticClient;
