import Link from "next/link";
import React from "react";
import classes from "./sidebar.module.css";

const Sidebar = (props) => {
    const { navElementName, router } = props;

  return (
    <div className={classes.sidebar}>
      <div className={classes.items}>
        {navElementName.map((nvE, ind) => (
          <div key={ind}>
            <Link href={nvE.path}>
              <a
                className={router.pathname == nvE.path ? classes.active : ""}
              >
                {nvE.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
