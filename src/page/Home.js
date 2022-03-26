import React, { useEffect, useState } from "react";
import AddToCard from "../component/AddToCard/AddToCard";
import Card from "../component/Card/Card";

// data
// import data from "../data/hello.JSON";
// css
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
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
            <Card key={book.id} book={book} />
          ))}
        </div>
        <div className="addToCardContainer">
          <AddToCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
