import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = `₹${props.price}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}
