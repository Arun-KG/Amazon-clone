import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, price, rating, title }) {
  const [state, dispatch] = useStateValue();

  function makeRating() {
    let finalRating = "";

    for (let i = 0; i < rating; i++) {
      finalRating += "⭐";
    }

    return finalRating;
  }

  //Remove from cart handler
  function removeFromCart() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <CurrencyFormat
          className="checkoutProduct__price"
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        <div className="product__rating">{makeRating()}</div>
        <button className="checkoutProduct__button" onClick={removeFromCart}>
          Remove form Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
