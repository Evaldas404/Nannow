/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import HappyPhoto from "../../assets/HappyPhoto.png";
import PlayButton from "../../assets/PlayButton.png";
import AppleButton from "../../assets/AppleButton.png";

const Promo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Norite išsikviesti šia auklę?</h1>
        <h4>Atsisųskite Nannow programelę!</h4>
        <div className={styles.buttons}>
          <img src={PlayButton.src} />
          <img src={AppleButton.src} />
        </div>
      </div>
      <div className={styles.right}>
        <img src={HappyPhoto.src} />
      </div>
    </div>
  );
};

export default Promo;
