import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

import "./Subtotal.css";

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"}) :{" "}
        <strong>
          <CurrencyFormat
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button className="checkout__button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
