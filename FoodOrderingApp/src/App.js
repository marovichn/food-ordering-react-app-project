import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

function App() {
  const [cartData, setCartData] = useState({
    isClosed: true,
    isOrdered: false,
  });

  const showCart = (data) => {
    setCartData((prev) => {
      return { ...prev, isClosed: false };
    });
  };

  const closeHandler = (data) => {
    setCartData((prev) => {
      return { ...prev, isClosed: true, isOrdered: false };
    });
  };

  const orderHandler = (data) => {
    setCartData((prev) => {
      return { ...prev, isOrdered: true, isClosed: false };
    });
  };

  return (
    <React.Fragment>
      <Header onClick={showCart}></Header>
      {!cartData.isClosed && (
        <Cart
          onClosing={closeHandler}
          onOrder={orderHandler}
          ordered={cartData.isOrdered}
        ></Cart>
      )}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
