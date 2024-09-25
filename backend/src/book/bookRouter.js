import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "./bookController.js";

const router = Router();

router.get("/book", getBooks);
router.get("/book/:id", getBook);
router.post("/book", createBook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
