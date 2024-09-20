import { createRequestHandler } from "@remix-run/express";
import express from "express";

const app = express();

// needs to be called before the static middleware
app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
  })
);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});