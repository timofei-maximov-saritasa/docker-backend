import { join, dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

import { router as authorsRouter } from "./authors.js";
import { router as booksRouter } from "./books.js";

const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(authorsRouter);
app.use(booksRouter);

app.get("/", (req, res) => {
  res.send("Hello from server! 🤡");
});

app.get("/html", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`<html><body><h1>This is HTML</h1></body></html>`);
});

app.get("/cool-html", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/json", (req, res) => {
  res.json({ message: "This is a JSON response" });
});

app.get("/csv", (req, res) => {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=testfile.csv");
  res.send(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
