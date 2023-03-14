import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const input = {
    type: "number",
    step: "1",
    id: "amount",
    min: "1",
    max: "5",
    defaultValue: "1",
  };
  return (
    <form className={classes.form}>
      <Input label="Amount" input={input}></Input>
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
