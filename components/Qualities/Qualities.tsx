import React from "react";
import styles from "./styles.module.css";
import Quality from "../Quality/Quality";

type QualitiesProps = {
  qualities: string[];
};

const Qualities = ({ qualities }: QualitiesProps) => {
  return (
    <div className={styles.main}>
      <h2>Kitos savybės</h2>
      <div className={styles.cards}>
        {qualities.map((q) => {
          return <Quality key={q} id={q} />;
        })}
      </div>
    </div>
  );
};

export default Qualities;
