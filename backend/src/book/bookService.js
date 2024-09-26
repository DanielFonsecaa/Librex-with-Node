import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export async function listBooks() {
  try {
    return await prisma.book.findMany();
  } catch (error) {
    console.error(error);
  }
}

export async function getBookById(id) {
  try {
    return await prisma.book.findUnique({ where: { id } });
  } catch (error) {
    console.error(error);
  }
}

export async function createBook(bookData) {
  try {
    return await prisma.book.create({
      data: {
        title: bookData.title,
        author: bookData.author,
        isbn: bookData.isbn,
        price: Math.round(bookData.price * 100) / 100,
        quantity: bookData.quantity,
        imageUrl: bookData.imageUrl,
        publisher: bookData.publisher,
        publishedYear: bookData.publishedYear,
        genre: bookData.genre,
        synopsis: bookData.synopsis,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateBook(id, updatedBookData) {
  try {
    return await prisma.book.update({
      where: { id },
      data: {
        title: updatedBookData.title,
        author: updatedBookData.author,
        isbn: updatedBookData.isbn,
        price: updatedBookData.price,
        quantity: updatedBookData.quantity,
        imageUrl: updatedBookData.imageUrl,
        publisher: updatedBookData.publisher,
        publishedYear: updatedBookData.publishedYear,
        genre: updatedBookData.genre,
        synopsis: updatedBookData.synopsis,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteBook(id) {
  try {
    return await prisma.book.delete({ where: { id } });
  } catch (error) {
    console.error(error);
  }
}
