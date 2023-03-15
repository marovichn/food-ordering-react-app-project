import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isClosed, setClosed] = useState(false);
  const [isOrdered, setOrder] = useState(false);
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      return <li>{item.name}</li>;
    }
  );

  const handleClose = (e) => {
    e.preventDefault();
    setClosed(true);
    setOrder(false);
    props.onClosing(isClosed);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setClosed(true);
    setOrder(true);
    props.onOrder(isOrdered);
  };

  return (
    <Modal>
      {props.ordered ? (
        <React.Fragment>
          <h1>SUCCESSFULY ORDERED!</h1>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={handleClose}>
              Close
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {" "}
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>34.5</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={handleClose}>
              Close
            </button>
            <button className={classes.button} onClick={handleOrder}>
              Order
            </button>
          </div>
        </React.Fragment>
      )}
    </Modal>
  );
};
export default Cart;
