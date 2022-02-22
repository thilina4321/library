import Head from "next/head";
import React from "react";
import { aws } from "../../data/aws/aws";

const AwsSpecificOne = (props) => {
  const { data } = props;
  const findData = aws.find((g) => g.name === data.name);

  return (
    <div className="section">
      <Head>
        <title> {findData.name.toUpperCase()} </title>
      </Head>
      <div>{findData.data}</div>
    </div>
  );
};

export default AwsSpecificOne;

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
