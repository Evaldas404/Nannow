import React from "react";
import styles from "./styles.module.css";
import Capability from "../Capability/Capability";

type CapabilitiesProps = {
  capabilities: string[];
};

const Capabilities = ({ capabilities }: CapabilitiesProps) => {
  return (
    <div className={styles.main}>
      <h2>Specialūs įgūdžiai</h2>
      <div className={styles.cards}>
        {capabilities.map((c) => {
          return <Capability key={c} id={c} />;
        })}
      </div>
    </div>
  );
};

export default Capabilities;
