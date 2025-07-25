/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.css";

type ButtonWithIcon = {
  title: string;
  imgSrc: string;
};

const ButtonWithIcon = ({ title, imgSrc }: ButtonWithIcon) => {
  return (
    <button className={styles.main}>
      <img src={imgSrc} alt={title} />
      <span>{title}</span>
    </button>
  );
};

export default ButtonWithIcon;
