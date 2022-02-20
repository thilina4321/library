import React from "react";
import classes from "./button.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const ButtonCom = () => {
  const codeString = `.btn {
    text-decoration: none;
    cursor: pointer;
    font: inherit;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    padding: 0.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    }
    .btn:hover,
    .btn:active {
    background-color: #02afa1;
    border-color: #02afa1;
    }`;
  return (
    <section className={classes.section}>
      <h1 className="title">Button Component</h1>
      <h4>
        This is a example code that we can use for button component in React. It
        contain both the javascription code and the css code. So we can just
        copy the code and add it to our new project.
      </h4>
      <div className={classes.code__wrapper}>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default ButtonCom;
