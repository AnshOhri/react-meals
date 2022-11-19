import React from "react";
import styles from "./HeaderCartIcon.module.css";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartIcon(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}
