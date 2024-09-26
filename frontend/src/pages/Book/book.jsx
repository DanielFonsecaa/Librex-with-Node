import { useState, useEffect } from "react";
import api from "../../services/api.js"; // Ensure you import your API client
import { Link } from "react-router-dom";

const Book = () => {
  const [books, setBooks] = useState([]);

  async function fetchData() {
    const bookData = await api.get("/api/book"); // Ensure this is the correct API endpoint
    setBooks(bookData.data);
    console.log(bookData.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (books.length === 0) return <p>No books available.</p>;

  return (
    <div className="container flex flex-wrap justify-between items-center w-full m-20">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-card flex border-2 border-black w-1/2"
        >
          <Link to={`/${book.id}`} className="flex w-full">
            {/* Left section: Image */}
            <div className="w-1/3 flex justify-center items-center p-4">
              <img
                src="https://nebraska.art.br/Daniel/001/theCatcher.png"
                alt="bookPng"
                className="object-contain"
              />
            </div>

            {/* Right section: Text */}
            <div className="w-2/3 flex flex-col justify-between p-4">
              {/* Top section: Title, Author, and ID */}
              <div className="mb-4">
                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-sm">{book.author}</p>
                <p className="text-sm">ID: {book.id}</p>
              </div>

              {/* Bottom section: Price, ISBN, and Quantity */}
              <div>
                <p className="text-sm">Price: {book.price}</p>
                <p className="text-sm">ISBN: {book.isbn}</p>
                <p className="text-sm">Quantity: {book.quantity}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Book;
