import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import classes from "./contributions.module.css";

const Archieves = (props) => {
  const { achives } = props;
  const router = useRouter();
  return (
    <div>
      {achives.map((ac, index) => (
        <div
          key={index}
          onClick={() => router.push("/contributions/" + ac.path)}
          className={classes.item}
        >
          <h1> {ac.name} </h1>
          <Image height={200} width={200} src={ac.url} alt={ac.name} />
        </div>
      ))}
    </div>
  );
};

export default Archieves;
