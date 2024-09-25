import express from "express";
import cors from "cors";
import bookRouter from "./book/bookRouter.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors()); //Middleware necessary for cross-origin requests
app.use(express.json());

app.use("/api", bookRouter);

// Redirect to /api/customer
// If the user accesses the root of the application, it will be redirected to /api/books
app.use("/", (_, res) => {
  res.redirect("/api/book");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
