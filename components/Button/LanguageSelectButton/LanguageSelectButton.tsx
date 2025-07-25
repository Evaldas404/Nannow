import React from "react";
import styles from "./styles.module.css";


type LanguegeSelectButtonProps = {
  selectLanguage: "LT" | "EN";
  onSelectLanguage: () => void;
};

const LanguageSelectButton = ({
  selectLanguage,
  onSelectLanguage,
}: LanguegeSelectButtonProps) => {
  return (
    <select
      value={selectLanguage}
      onChange={onSelectLanguage}
      className={styles.main}
    >
      <option value="LT">LT</option>
      <option value="EN">EN</option>
    </select>
  );
};

export default LanguageSelectButton;
