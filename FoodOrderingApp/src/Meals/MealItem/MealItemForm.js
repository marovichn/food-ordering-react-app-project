import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountFormRef = useRef();
  const submitHandler = (event) => {
    event.preventdefault();
    const enteredAmount = amountFormRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };
  const input = {
    type: "number",
    step: "1",
    id: "amount_" + props.id,
    min: "1",
    max: "5",
    defaultValue: "1",
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={input} ref={amountFormRef}></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>input is invalid or you have too many orders</p>}
    </form>
  );
};
export default MealItemForm;
