/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import { languages } from "@/data/languages";

type LanguageProps = {
  id: string;
};

const Language = ({ id }: LanguageProps) => {
  const language = languages.find((l) => l.id === id);

  return (
    <div className={styles.main}>
      <img src={language?.icon.src} />
      <div className={styles.text}>
      <h3>{language?.title}</h3>
      <h5>{language?.text}</h5>
      </div>
    </div>
  );
};

export default Language;
