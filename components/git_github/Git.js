import React from "react";
import classes from "./git.module.css";

const Git = (props) => {
  const { data = [] } = props;
  return (
    <div className={classes.grid}>
      {data.map((d, i) => (
        <h3 className={classes.grid_item} key={i}> Remove Git Repo </h3>
      ))}
    </div>
  );
};

export default Git;
