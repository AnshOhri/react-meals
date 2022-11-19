import React from "react";
import mealImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartIcon from "./HeaderCartIcon";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartIcon onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="Meal" />
      </div>
    </React.Fragment>
  );
}
