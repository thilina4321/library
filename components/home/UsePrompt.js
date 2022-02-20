import React from "react";
import classes from "./useprompt.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const UsePrompt = () => {
  const codeString = `import React, { useEffect, useState } from “react”;
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
      <h1 className="title">Use Prompt Hook</h1>
      <h4>
        {" "}
        This is a example code that we can use for as a prompt for react js. As
        react router 6 version not yet provide the prompt we can use this hook
        instead of that.{" "}
      </h4>
      <div className={classes.code__wrapper}>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default UsePrompt;
