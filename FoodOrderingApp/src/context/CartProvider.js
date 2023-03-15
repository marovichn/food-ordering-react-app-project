import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: newTotalAmount };
  }
  /* } else if (action.type === "REMOVE") {
  } */
  return {};
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultCartState);
  const addItemToCarthandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemToCarthandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemToCarthandler,
    removeItem: removeItemToCarthandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
