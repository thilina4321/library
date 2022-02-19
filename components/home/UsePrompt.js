import React from "react";
import classes from "./useprompt.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const UsePrompt = () => {
  const codeString = 
  `import React, { useEffect, useState } from “react”;
    const usePrompt = () => {
    const [when, setWhen] = useState(false);
    const [value, setValue] = useState(“”);
    useEffect(() => {
        if (when) {
          const val = window.confirm(“Are you sure?”);
          setWhen(false)
          setValue(val)
        }
      }, [when]);
      return [value, () => setWhen(true)];
    };
export default usePrompt;`;
  return (
    <section className={classes.section}>
      <h1>Use Prompt Hook</h1>
        <SyntaxHighlighter language="javascript" >
          {codeString}
        </SyntaxHighlighter>
    </section>
  );
};

export default UsePrompt;
