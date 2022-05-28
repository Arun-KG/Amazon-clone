import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import { useStateValue } from "./StateProvider";

function Header() {
  const [state] = useStateValue();
  const [isFocus, isFocusChanged] = useState(false);

  //console.log(state.cart);

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className="header__logo"
        />
      </Link>

      <div className={`header__search ${isFocus ? `outline-orange` : ``}`}>
        <input
          type="text"
          className="header__searchInput"
          onFocus={() => {
            isFocusChanged(true);
          }}
          onBlur={() => {
            isFocusChanged(false);
          }}
        />

        <button className="header__searchButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="header__searchIcon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&amp; Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link
          to="/checkout"
          className="header__link header__options link__styles"
        >
          <div className="header__optionsCart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="header__cartIcon"
              width="25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="header__cartCount">{state.cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
