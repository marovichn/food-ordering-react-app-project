import React from "react";
import classes from "./Cart.module.css";

const modalPortal = (props) => {};

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      return <li>{item.name}</li>;
    }
  );

  return (
    <div>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
export default Cart;
