import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      {/* <Cart></Cart> */}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
