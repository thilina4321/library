import React from "react";
import MainHeader from "./MainHeader";
import classes from "./layout.module.css";
import Slider from "./MobileHeader";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const navElementName = [
    { name: "Use Prompt", path: "/" },
    { name: "Docs", path: "/project" },
    { name: "Banks", path: "/banks" },
    { name: "Contributions", path: "/contributions" },
  ];
  const router = useRouter();

  return (
    <div>
      <MainHeader router={router} navElementName={navElementName} />
      <Slider router={router} navElementName={navElementName} />

      <div className={classes.desktop}>
        <Sidebar router={router} navElementName={navElementName} />
        <main className={classes.main}> {children} </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
