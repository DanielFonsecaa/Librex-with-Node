import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../services/api.js";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faTrashCan,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  async function fetchData() {
    const bookData = await api.get(`/api/book/${id}`); // Ensure this is the correct API endpoint
    setBooks(bookData.data);
    console.log(bookData.data);
  }

  async function deleteBook(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (isConfirmed) {
      await api.delete(`/api/book/${id}`);
      navigate("/");
    }
  }

  async function updateBook() {
    await api.put(`/api/book/${id}`);
    navigate(`/book/${id}`);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Book Details</h1>
      <p>This is the details of a book.{id}</p>
      <div key={books.id} className="book-card flex border-2 border-black">
        <h2>{books.title}</h2>
        <p>{books.description}</p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
        <button onClick={deleteBook}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button onClick={updateBook}>
          <FontAwesomeIcon icon={faPenNib} />
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
