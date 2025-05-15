import "express-async-errors";
import express from "express";
import mainRouter from "./routers/router.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("views", "views");
app.set("layout", "./layouts/master");

app.use("/", mainRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    message: "Api endpoint does not found",
  });
});

app.use((error, req, res, next) => {
  let status = error?.status ?? error?.statusCode ?? error?.code;

  if (!status || isNaN(+status) || status > 511 || status < 200) {
    status = 500;
  }

  return res.status(status).json({
    data: { body: req.body, query: req.query },
    message: error?.message ?? error?.stack ?? "Internal Server Error",
  });
});

const { PORT } = process.env;
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
