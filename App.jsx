import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./components/FrontPage";
import OtherUsers from "./components/OtherUsers";
import AddBookForm from "./components/BookForm/AddBookForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [booksFull, setBooksFull] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooksFull(data));
  }, []);

  function postBook(bookobj, addingBook) {
    console.log(bookobj)
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookobj),
    })
      .then((res) => res.json())
      .then((addingBook) => {
        setBooksFull((prevBooksFull) => [...prevBooksFull, addingBook]);
      });
  }
// console.log(booksFull)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<FrontPage booksFull={booksFull} postBook={postBook} />}
          />
        {/* </Routes> */}
        {/* <Routes> */}
          <Route path="/OtherUsers" element={<OtherUsers />} />
        {/* </Routes> */}
        {/* <Routes> */}
          <Route path="/AddBookForm" element={<AddBookForm postBook={postBook}/>} />
        {/* </Routes> */}
        {/* <Routes> */}
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
