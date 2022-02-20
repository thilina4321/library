import Head from "next/head";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import UseUnsaved from "../../components/use_unsaved/UseUnsaved";

const BloodBank = () => {
  return (
    <Fragment>
      <Head>
        <title> Use Unsaved Hook </title>
      </Head>
      <UseUnsaved />
    </Fragment>
  );
};

export default BloodBank;
