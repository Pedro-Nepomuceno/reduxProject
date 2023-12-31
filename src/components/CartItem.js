import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

export const CartItem = ({ id, image, price, title, amount }) => {
  return (
    <article className="cart-item">
      <img src={image} alt="title" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
