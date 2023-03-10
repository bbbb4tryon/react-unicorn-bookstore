import React, { useState, useEffect } from "react";
import BookCover from "./BookCover";
import "./zBookCarousel.css";

function BookCarousel({ books }) {

  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect hook to automatically change the slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % books.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide, books.length]);

  // Array of book covers
  const bookCovers = books.map((book) => {
    // Get the URL of the book cover image from the book object
    const coverUrl = book.coverUrl;
    console.log(book)
    // Return a BookCover component with the book cover image as a prop
    return <BookCover key={book.id} coverUrl={coverUrl} />;
  });
// console.log(bookCovers[0])
  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Container for the slides */}
        <div className="slides">
          {bookCovers[currentSlide]}
          {/* Map through the bookCovers array and add a slide for each cover */}
          {/* {bookCovers.map((cover, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {cover}
            </div>
          ))} */}
        </div>
        {/* Previous and Next slide controls */}
        <div className="controls">
          <div
            className="control prev-slide"
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? books.length - 1 : currentSlide - 1
              )
            }
          >
            &#9668;
          </div>
          <div
            className="control next-slide"
            onClick={() => setCurrentSlide((currentSlide + 1) % books.length)}
          >
            &#9658;
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCarousel;
