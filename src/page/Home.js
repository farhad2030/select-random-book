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

  const [selectOneBook, setSelectONeBook] = useState("");
  const addToCardHandeler = (book) => {
    let tempSelectBooks = [];
    // console.log(book);
    if (selectedBooks.find((tempBook) => tempBook.id == book.id)) {
      return;
    }

    if (selectedBooks.length < 4) {
      tempSelectBooks = [...selectedBooks, book];
      setSelectedBooks(tempSelectBooks);
    } else {
      alert("Can't add more then 4 items");
    }
  };

  const reset = () => {
    setSelectedBooks([]);
    setSelectONeBook("");
  };
  const selectOne = () => {
    let index = Math.floor(Math.random() * selectedBooks.length);

    setSelectONeBook(selectedBooks[index]);
  };
  // console.log(selectOneBook);
  useEffect(() => {
    fetch("./hello.JSON")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="heading">Select Best Book</div>
      <div className="container">
        <div className="cardContainer">
          {books.map((book) => (
            <Card key={book.id} book={book} func={addToCardHandeler} />
          ))}
        </div>
        <div className="addToCardContainer">
          <h1>Selected books</h1>
          <AddToCard selectedBooks={selectedBooks} />

          <button className="btn" onClick={selectOne}>
            Select One for me{" "}
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>

          {selectOneBook ? (
            <div className="oneBook">{selectOneBook.name}</div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="questions">
        <div> Q: Difference between props and state</div>
        <div>
          {" "}
          Props is immutable but can change from where it define or declear.{" "}
          <br />
          State can change by setState function. State is internal data . props
          is external data .
        </div>
      </div>
      <div className="questions">
        <div> Q:How useState works</div>
        <div>
          First of all useState function receved a parameter as initial value
          .then return an array which first item is current tate and second item
          is a function by which update the state.
        </div>
      </div>
    </div>
  );
};

export default Home;
