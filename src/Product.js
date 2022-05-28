import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Product.css";

import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  function addToCart() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  }

  function makeRating() {
    let finalRating = "";

    for (let i = 0; i < rating; i++) {
      finalRating += "⭐";
    }

    return finalRating;
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <CurrencyFormat
          className="product__price"
          decimalScale={2}
          value={price}
          prefix={"₹"}
          thousandSeparator={true}
          displayType={"text"}
        />

        <div className="product__rating">{makeRating()}</div>
      </div>
      <img src={image} alt="" />
      <button className="product__button" content="" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
