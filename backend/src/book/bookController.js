import * as bookService from "./bookService.js";

export async function getBooks(req, res) {
  try {
    const data = await bookService.listBooks();

    if (!data) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error fetching books" });
  }
}

export async function getBook(req, res) {
  try {
    const data = await bookService.getBookById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error fetching book" });
  }
}

export async function createBook(req, res) {
  try {
    const data = await bookService.createBook(req.body);
    if (!data) {
      return res.status(400).json({ message: "Invalid book data" });
    }
    res.status(201).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error creating book" });
  }
}

export async function updateBook(req, res) {
  try {
    const data = await bookService.updateBook(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error updating book" });
  }
}

export async function deleteBook(req, res) {
  try {
    const data = await bookService.deleteBook(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(204).send();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error deleting book" });
  }
}
