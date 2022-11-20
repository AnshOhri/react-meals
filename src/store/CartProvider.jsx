import React from "react";
import CartContext from "./CartContext";

export default function CartProvider(props) {
  const addItem = (item) => {};

  const removeItem = (id) => {};

  const cardContext = {
    items: [],
    addItem: addItem,
    removeItem: removeItem,
    totalAmount: 0,
  };
  return (
    <CartContext.Provider value={cardContext}>
      {props.children}
    </CartContext.Provider>
  );
}
