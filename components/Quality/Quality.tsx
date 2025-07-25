/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import { qualities } from "@/data/qualities";

type QualitiesProps = {
  id: string;
};

const Quality = ({ id }: QualitiesProps) => {
  const quality = qualities.find((q) => q.id === id);
  return (
    <div className={styles.main}>
      <img src={quality?.icon.src} />
      <h3>{quality?.title}</h3>
    </div>
  );
};

export default Quality;
