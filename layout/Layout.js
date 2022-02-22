import React from "react";
import MainHeader from "./MainHeader";
import classes from "./layout.module.css";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const navElementName = [
    { name: "GIT & GITHUB", path: "/" },
    { name: "AWS", path: "/aws" },
    { name: "Use Unsaved", path: "/use_unsaved" },
  ];
  const router = useRouter();

  return (
    <div>
      <MainHeader router={router} navElementName={navElementName} />

      <div className={classes.desktop}>
        <Sidebar router={router} navElementName={navElementName} />
        <main className={classes.main}> {children} </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
