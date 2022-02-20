import React from "react";
import classes from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const PageLayout = (props) => {
  const { codeString, title, description } = props;
  return (
    <section className={classes.section}>
      <h1 className="title">{title}</h1>
      <h4>{description}</h4>
      <div className={classes.code__wrapper}>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default PageLayout;
