import React from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
}
