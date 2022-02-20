import { useRouter } from "next/router";
import React from "react";
import classes from "./page.module.css";

const Git = (props) => {
  const { data = [] } = props;
  const router = useRouter()
  return (
    <div className={classes.grid}>
      {data.map((d, i) => (
        <h3 onClick={()=> router.push(`${d.path}`)} className={classes.grid_item} key={i}> {d.title} </h3>
      ))}
    </div>
  );
};

export default Git;
