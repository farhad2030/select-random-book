import React, { useEffect, useState } from "react";
import AddToCard from "../component/AddToCard/AddToCard";
import Card from "../component/Card/Card";

// data
// import data from "../data/hello.JSON";
// css
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const addToCardHandeler = (book) => {
    let tempSelectBooks = [];
    // console.log(book);
    tempSelectBooks = [...selectedBooks, book];
    setSelectedBooks(tempSelectBooks);
  };

  useEffect(() => {
    fetch("./hello.JSON")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="heading">Select random 4 books</div>
      <div className="container">
        <div className="cardContainer">
          {books.map((book) => (
            <Card key={book.id} book={book} func={addToCardHandeler} />
          ))}
        </div>
        <div className="addToCardContainer">
          {/* {selectedBooks.map((book) => {
            <AddToCard key={book.id} selectBook={book} />;
          })} */}
          <AddToCard selectedBooks={selectedBooks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
