import React from "react";


const BankDetails = (props) => {
  const { title } = props;
  
  return <section className="section">
      <h1> {title} </h1>
  </section>;
};

export default BankDetails;

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;

  return {
    props: {
      title: params['city'],
    },
  };
};
