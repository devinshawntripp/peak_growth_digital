import { createRequestHandler } from "@remix-run/express";
import express from "express";

const app = express();

// Get the port from the environment variable or use 3000 as default
const port = process.env.PORT || 3000;

// needs to be called before the static middleware
app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
  })
);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});