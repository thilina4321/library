import Link from "next/link";
import React, { Fragment, useState } from "react";
import classes from "./mobile.module.css";

const Slider = (props) => {

  const { navElementName, router, showMenu, setShowMenu } = props;

  const toggleSlider = () => {
    setShowMenu(!showMenu)
  };

  return (
    <div className={classes.header}>
      <ul className={classes.elements}>
        {navElementName.map((nvE, ind) => (
          <Fragment key={ind}>
            <Link href={nvE.path}>
              <a
                onClick={toggleSlider}
                className={router.pathname == nvE.path ? classes.active : ""}
              >
                {nvE.name}
              </a>
            </Link>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
