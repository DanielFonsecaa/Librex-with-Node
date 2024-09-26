import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBook from "./pages/addForm/addBook.jsx";
import Book from "./pages/Book/book.jsx";
import BookDetails from "./pages/bookDetails/bookDetails.jsx";
import EditBook from "./pages/editForm/EditForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Book /> },
      { path: "add", element: <AddBook /> },
      { path: "/:id", element: <BookDetails /> },
      { path: "book/:id", element: <EditBook /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
