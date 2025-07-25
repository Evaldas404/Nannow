/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { capabilities } from "../../data/capabilities";
import styles from "./styles.module.css";

type CapabilityProps = {
  id: string;
};

const Capability = ({ id }: CapabilityProps) => {
  const capability = capabilities.find((c) => c.id === id);

  return (
    <div className={styles.main}>
      <img src={capability?.icon.src} />
      <h3>{capability?.title}</h3>
      <p>{capability?.subtitle}</p>
    </div>
  );
};

export default Capability;
