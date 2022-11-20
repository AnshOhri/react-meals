import React, { useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [numberOfItems, setItems] = useState(1);
  const buttonHandler = (prevState) => {
    return setItems(prevState + 1);
  };
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
          value: { numberOfItems },
        }}
      ></Input>
      <button onClick={buttonHandler}>+ Add</button>
    </form>
  );
}
