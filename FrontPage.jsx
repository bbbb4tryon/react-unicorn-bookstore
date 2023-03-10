import React, { useState, useEffect } from "react";
import BookCarousel from "./BookCarousel";
import AddBookForm from "./BookForm/AddBookForm"
import "./zFrontPage.css";

function FrontPage({ booksFull, postBook }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the book data from the API
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data.booksFull));
  }, []);

  return (
    <div className="front-page">
      <h1>Find Your Unicorn Among the Horses</h1>
      <h5>
        Book Recommendations Based Upon the “Unicorn” Qualities of Any Novel
      </h5>
      <BookCarousel books={booksFull} />
    </div>
  );
}

export default FrontPage;
