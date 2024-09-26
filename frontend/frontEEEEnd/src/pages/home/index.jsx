import { useState, useEffect } from "react";
import api from "../../services/api.js"; // Ensure you import your API client

function Home() {
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
    <div className="container">
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <button onClick={() => console.log("go back button")}>go back</button>
          <button onClick={() => console.log("edit button")}>edit</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
