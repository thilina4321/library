import React from "react";
import { git } from "../data/git_and_github/git";

const GitAndGitHubSpecificOne = (props) => {
  const { data } = props;
  const findData = git.find((g) => g.name === data.name);

  return <div className="section">{findData.data}</div>;
};

export default GitAndGitHubSpecificOne;

export const getStaticProps = async (ctx) => {
  const params = ctx.params;
  return {
    props: {
      data: params,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
