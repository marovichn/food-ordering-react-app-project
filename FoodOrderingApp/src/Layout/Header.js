import React from "react";
import classes from "./Header.module.css";
import meals from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const handler = (e) => {
    e.preventDefault();
    props.onClick({ isClosed: false });
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>LoveMeals</h1>
        <HeaderCartButton onClick={handler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="table of delicious food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
