import React, { Fragment, useState } from "react";

import classes from "./main.module.css";
import Slider from "./MobileHeader";

const MainHeader = (props) => {
  const externalElements = [
    { url: "https://www.linkedin.com/in/thilina-dilshan/", icon: "LinkedIn" },
    { url: "https://github.com/thilina4321", icon: "GitHub" },
    { url: "https://vercel.com/dashboard", icon: "Vercel" },
  ];

  const { navElementName, router } = props;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.icon} onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? 'X' : 'Menu' }
        </div>
        <div onClick={() => router.push("/")}> CDOE BOOK </div>

        <div className={classes.elements}>
          {externalElements.map((nvE, ind) => (
            <Fragment key={ind}>
              <a href={nvE.url} target="_blank">
                {nvE.icon}
              </a>
            </Fragment>
          ))}
        </div>

        {showMenu && <Slider showMenu={showMenu} setShowMenu={setShowMenu} navElementName={navElementName} router={router} />}
      </nav>
    </header>
  );
};

export default MainHeader;
