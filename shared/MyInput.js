import React from "react";
import classes from "./myinput.module.css";


const MyInput = (props) => {
  const { label, type = "text", value, setValue } = props;
  return (
    <div className={classes.section}>
      <label htmlFor={label}> {label} </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        type={type}
      />
    </div>
  );
};

export default MyInput;
