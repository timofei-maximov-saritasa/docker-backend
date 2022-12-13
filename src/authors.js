import { Router } from "express";

export const router = Router();

const authors = [
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
];

router.get("/authors", (req, res) => {
  res.json(authors);
});
