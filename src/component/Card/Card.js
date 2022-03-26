import React from "react";

import "./Card.css";
const Card = (props) => {
  console.log(props.book);
  const { name, imageLink, id, price } = props.book;
  return (
    <div className="card">
      <img src={imageLink} alt="book image" />

      <div className="cardText">
        <p>Name : {name}</p>
        <p>Price : {price}</p>
        {/* <p>{imageLink}</p> */}
      </div>
      <button>
        <span className="btntext">Add to cart</span>{" "}
      </button>
    </div>
  );
};

export default Card;
