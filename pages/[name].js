import Head from "next/head";
import React from "react";
import { git } from "../data/git_and_github/git";

const GitAndGitHubSpecificOne = (props) => {
  const { data } = props;
  const findData = git.find((g) => g.name === data.name);

  return (
    <div className="section">
      <Head>
          <title> {findData.name} </title>
      </Head>
      <div>{findData.data}</div>
    </div>
  );
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
