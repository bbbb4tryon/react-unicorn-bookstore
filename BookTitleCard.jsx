import React from "react";
import { Link } from "react-router-dom";
import { FaTheaterMasks } from "react-icons/fa";

const BookTitleCard = ({ book }) => {
  console.log(book)
  const {
    title,
    cover,
    author,
    genre,
    backOfBook,
    emotion,
    povOrNarrator,
    heroOrAntiHero,
    niceAntagonistOrNot,
    wildcard,
    description,
  } = book;

  return (
    <div className="book-title-card">
      <img className="cover" src={cover} alt="book cover" />
      <div className="book-info">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="genre">{genre}</div>
        <div className="backOfBook">
          {backOfBook}
          <span>
            <i className="icon " />
          </span>
        </div>
        <div className="emotion">
          {emotion}
          <span>
            {" "}
            <FaTheaterMasks />
            <i className="icon " />
          </span>
        </div>
        <div className="povOrNarrator">
          {povOrNarrator}
          <span>
            <i className="icon " />
          </span>
        </div>
        <div className="heroOrAntiHero">
          {heroOrAntiHero}
          <span>
            <i className="icon " />
          </span>
        </div>
        <div className="niceAntagonistOrNot">
          {niceAntagonistOrNot}
          <span>
            <i className="icon " />
          </span>
        </div>
        <div className="wildcard">
          {wildcard}
          <span>
            <i className="icon " />
          </span>
        </div>
        <div className="description">
          {description}
          <span>
            <i className="icon " />
          </span>
        </div>
        <Link to={`/books/${book.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookTitleCard;
