import React from "react";
import classes from "./button.module.css";

const MyButton = (props) => {
  const { name } = props;
  return <button className={classes.btn}>{name}</button>;
};

export default MyButton;
