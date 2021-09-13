import React from "react";
import styles from "../styles/Home.module.css";

const Options = ({ children }: any) => {
  return (
    <>
      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2>Options &rarr;</h2>
        {children}
        <p>Customize the features of your upcoming call!</p>
      </a>
    </>
  );
};

export default Options;
