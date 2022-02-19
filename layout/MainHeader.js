import React, { Fragment } from "react";

import classes from "./main.module.css";
import Link from "next/link";

const MainHeader = () => {
  const navElementName = [
    { url: "https://www.linkedin.com/in/thilina-dilshan/", icon: 'LinkedIn' },
    { url: "https://github.com/thilina4321", icon: 'GitHub' }
  ];

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {" "}
        <Link href={"/"}>
          <a style={{ fontWeight: "bold" }}> CODE BOOK </a>
        </Link>{" "}
      </nav>
      <div className={classes.elements}>
        {navElementName.map((nvE, ind) => (
          <Fragment key={ind}>
            <a href={nvE.url} target="_blank">
              {" "}
              {nvE.icon}
            </a>
          </Fragment>
        ))}
      </div>
    </header>
  );
};

export default MainHeader;
