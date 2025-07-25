/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import ExpandingText from "../Button/ExpandingText/ExpandingText";
import share from "../../assets/Share.svg";
import verified from "../../assets/verified.png";
import { useState } from "react";
import AppleButton from "../../assets/AppleButton.png";
import PlayButton from "../../assets/PlayButton.png";
import ButtonWithIcon from "../Button/ButtonWithIcon/ButtonWithIcon";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/Instagram.png";
import mailIcon from "../../assets/mail.png";

type ProfileProps = {
  imgUrl: string;
  name: string;
  intro: string;
  pageUrl: string;
};
const Profile = ({ imgUrl, intro, name }: ProfileProps) => {
  const [isSaving, setSaving] = useState(false);
  const [isSharing, setSharing] = useState(false);

  const toggleSaving = () => {
    setSaving(!isSaving);
  };

  const toggleSharing = () => {
    setSharing(!isSharing);
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} />
      </div>
      <div className={styles.content}>
        <h4>Aukles informacija</h4>
        <div className={styles.heading}>
          <span>
            <h1>{name}</h1>
            <img src={verified.src} />
          </span>
          <div className={styles.buttons}>
            <button onClick={toggleSaving}>♡ Issaugoti</button>
            <div
              className={`${styles.saving} ${
                isSaving ? styles.savingOpen : ""
              }`}
            >
              <div className={styles.Savingcard}>
                <div className={styles.exitButton}>
                  <button onClick={toggleSaving}>X</button>
                </div>
                <h2>
                  Norite išsisaugoti ateičiai <br /> šia auklę?
                </h2>
                <h3>Atsisųskite Nannow programelę!</h3>
                <div className={styles.buttons}>
                  <img src={AppleButton.src} />
                  <img src={PlayButton.src} />
                </div>
              </div>
            </div>
            <button onClick={toggleSharing}>
              <img src={share.src} /> Dalintis
            </button>
            <div
              className={`${styles.sharing} ${
                isSharing ? styles.sharingOpen : ""
              }`}
            >
              <div className={styles.sharingCard}>
                <div className={styles.exitButton}>
                  <button onClick={toggleSharing}>X</button>
                </div>
                <h2>
                  Pasidalink šia auklės <br /> nuoroda su kitais
                </h2>
                <div className={styles.textLine}>
                  <h5>Auklės profilio nuoroda</h5>
                  <div className={styles.around}>
                    <span className={styles.copyLink}>
                      <h5>https://nannow.app/lt/sitter-023213</h5>
                      <button>copy</button>
                    </span>
                  </div>
                </div>
                <h3>Arba</h3>
                <div className={styles.buttons}>
                  <ButtonWithIcon imgSrc={facebookIcon.src} title="Facebook" />
                  <ButtonWithIcon
                    imgSrc={instagramIcon.src}
                    title="Instagram"
                  />
                  <ButtonWithIcon imgSrc={mailIcon.src} title="El. paštu" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExpandingText text={intro} limit={600} />
      </div>
    </div>
  );
};

export default Profile;
