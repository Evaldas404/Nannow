import React, { useState } from "react";
import styles from "./styles.module.css";

type ExpandingTextProps = {
  text: string;
  limit: number;
};

const ExpandingText = ({ text, limit }: ExpandingTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  const toggleExpant = () => setExpanded(!expanded);

  return (
    <div className={styles.main}>
      {expanded ? text : text.slice(0, limit) + "..."}
      <button onClick={toggleExpant}>{expanded ? "Suskleisti" : "Daugiau"}</button>
    </div>
  );
};

export default ExpandingText;
