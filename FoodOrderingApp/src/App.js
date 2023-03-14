import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

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
