import Link from "next/link";
import React from "react";
import classes from "./bank.module.css";


const Banks = (props) => {
  const { banks } = props;
  return (
    <section className="section">
      <h1>This is the bllod bank</h1>
      <div className={classes.banks}>
        {banks.map(({ city }, index) => (
          <div key={index} className={classes.bank}>
            <h1> {city} </h1>
            <Link href={'/banks/' + city}>
                <a className="btn"> View </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banks;
