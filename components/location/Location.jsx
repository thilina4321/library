import React from "react";
import MyButton from "../../shared/MyButton";
import classes from "./location.module.css";

const Location = (props) => {
  const { title } = props;

  if (!title) {
    return <p> Loading... </p>;
  }

  return (
    <section className={classes.section}>
      <h1> {title.toUpperCase()} </h1>
      <div className={classes.map__view}></div>
      <div className={classes.map__btn}>
        <MyButton name="View Location" />
      </div>
    </section>
  );
};

export default Location;
