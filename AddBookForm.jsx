import React, { useState } from "react";
import BookTitleCard from "../BookTitleCard";
import Navbar from "../Navbar";
import FormFields from "./FormFields";

function AddBookForm({ postBook }) {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let error = "";
    if (name === "title" && !value) {
      error = "Title must be entered!";
    } else if (name === "author" && !value) {
      error = "Author must be entered!";
    } else if (name === "genre" && !value) {
      error = "Genre must be entered!";
    } else if (name === "isbn") {
      // use parseInt to convert the input string to a number
      const parsedIsbn = parseInt(value);
      // check if the parsed value is NaN or not 11 digits long
      if (isNaN(parsedIsbn) || parsedIsbn.toString().length !== 10) {
        error = "ISBN must be a number and 10 digits long!";
      }
    }
    setErrors((prevState) => ({ ...prevState, [name]: error }));
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "isbn":
        setIsbn(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      genre: genre,
      isbn: isbn,
    };

    fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const bookData = data[`ISBN:${isbn}`];
        const authorName = bookData.author ? bookData.author[0].name : "";
        const bookTitle = bookData.title ? bookData.title : "";
        const bookCover = bookData.cover ? bookData.cover.medium : "";
        postBook({
          ...newBook,
          author: authorName,
          title: bookTitle,
          cover: bookCover,
        });
        console.log(bookData);
        setCover("");
        setTitle("");
        setAuthor("");
        setGenre("");
        setIsbn("");
        setErrors({
          title: "",
          author: "",
          genre: "",
          isbn: "",
        });
      });
  }

  return (
    <div className="form-wrapper">
      <Navbar />
      {cover && <img src={cover} alt="book cover" />}
      <h2>Enter Favorite Book Info:</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          noValidate
        />
        {/* ternary where {errors.title} checks for error message
        in errors.title. If true true, then the second part of the
        statement, <span className="error">{errors.title}</span>, is rendered and an error shows */}
        {errors.title && <span className="error">{errors.title}</span>}
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          noValidate
        />
        {errors.author && <span className="error">{errors.author}</span>}
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={genre}
          onChange={handleChange}
          noValidate
        />
        {errors.genre && <span className="error">{errors.genre}</span>}
        <input
          type="text"
          name="isbn"
          placeholder="isbn"
          value={isbn}
          onChange={handleChange}
          noValidate
        />
        {errors.isbn && <span className="error">{errors.isbn}</span>}
        {/* A button to submit the form */}
        <div>
          <button type="submit">Post</button>
          <button type="submit">Recommendation</button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;

