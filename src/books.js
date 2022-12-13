import { Router } from "express";

export const router = Router();

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
];

router.get("/books", (req, res) => {
  res.json(books);
});
