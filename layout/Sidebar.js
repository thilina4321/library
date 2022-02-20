import Link from "next/link";
import React from "react";
import classes from "./sidebar.module.css";

const Sidebar = (props) => {
  const { navElementName, router } = props;

  return (
    <div className={classes.sidebar}>
      <div className={classes.items}>
        {navElementName.map((nvE, ind) => (
          <div onClick={()=>router.push(nvE.path)} key={ind} className={classes.item}>
              <p className={router.pathname == nvE.path ? classes.active : ""}>
                {nvE.name}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
