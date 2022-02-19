import React from "react";
import Archieves from "../../components/contributions/Contributions";
import path from "path";
import fs from "fs/promises";


const Achieve = (props) => {
  const {data} = props
  return (
    <div className="section">
      <Archieves achives={data} />
    </div>
  );
};

export default Achieve;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "contributions.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData)
  return {
    props: {data},
  };
};
