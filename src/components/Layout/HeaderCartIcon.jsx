import React, { useContext } from "react";
import styles from "./HeaderCartIcon.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

export default function HeaderCartIcon(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
