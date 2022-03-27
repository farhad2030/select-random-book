import React from "react";

// css
import "./AddToCard.css";
const AddToCard = (props) => {
  // const { id, name, img } = props.book;]

  // let lld = ;
  // console.log(props);
  return (
    <>
      {props.selectedBooks.map((book) => {
        return (
          <div key={book.id} className="addToCard">
            <img src={book.imageLink} alt="book" />

            <div>{book.name}</div>
            <div>X</div>
          </div>
        );
      })}
    </>
  );
};

export default AddToCard;
