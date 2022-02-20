import React from "react";
import classes from "./button.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const UseUnsaved = () => {
  const codeString = `import React, { useEffect, useState } from “react”;
  import { Prompt } from “react-router-dom”;
  const useUnsaved = (message = “Do you want to leave”) => {
    const [isDirty, setIsDirty] = useState(false);
    useEffect(() => {
      window.onbeforeunload = isDirty && (() => message);
      return () => (window.onbeforeunload = null);
    }, []);
    const prompt = <Prompt when={isDirty} message={message} />;
    return [prompt, () => setIsDirty(true), () => setIsDirty(false)];
  };
  export default useUnsaved;`;
  return (
    <section className={classes.section}>
      <h1 className="title">Use Unsaved Hook</h1>
      <h4>
        
      This is a example code that we can use for as a hook to indicate for the 
      user that he or she going to leave page after changing some data but without 
      saving those changes.
      </h4>
      <div className={classes.code__wrapper}>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter>
      </div>
      
    </section>
  );
};

export default UseUnsaved;
