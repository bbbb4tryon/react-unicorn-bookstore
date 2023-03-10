import React from "react";
import AddBookForm from "./BookForm/AddBookForm";
import About from "./About";
import OtherUsers from "./OtherUsers";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./zNavbar.css";



function Navbar() {
  return (
    <div className="navbar">
      
      <p>
        <Link to="/">
          <FaBook />
        </Link>
      </p>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/AddBookForm">Add A Book</Link>
        </li>
        <li>
          <Link to="/OtherUsers">Other Users</Link>
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
      </ul>
    </div>
  );}
export default Navbar;
