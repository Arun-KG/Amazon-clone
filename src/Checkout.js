import React from "react";

import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

import "./Checkout.css";

function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        {state.cart?.length === 0 ? (
          <div>
            <h2>Your Cart is empty.</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="Checkout__title">Your Cart</h2>
            <hr />

            {state.cart.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
