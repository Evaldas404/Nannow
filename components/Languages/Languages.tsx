import React from "react";
import styles from "./styles.module.css";
import Language from "../Language/Language";

type LanguagesProps = {
  languages: string[];
};

const Languages = ({ languages }: LanguagesProps) => {
  return (
    <div className={styles.main}>
      <h2>Kalbos</h2>
      <div className={styles.cards}>
        {languages.map((l) => {
          return <Language key={l} id={l} />;
        })}
      </div>
    </div>
  );
};

export default Languages;
