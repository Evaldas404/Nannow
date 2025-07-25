/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.css";
import LanguageSelectButton from "../Button/LanguageSelectButton/LanguageSelectButton";
import Button from "../Button/SimpleButton/Button";
import Link from "next/link";
import burgerMenu from "../../assets/burgerMenu.svg";

type HeaderProps = {
  links: {
    title: string;
    link: string;
  }[];
};

const Header = ({ links }: HeaderProps) => {
  const [isBurgerBtnOpen, setBurgerBtnOpen] = useState(false);

  const toggleBurgerBtnOpen = () => {
    setBurgerBtnOpen(!isBurgerBtnOpen);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src="https://nannow.app/images/Logo.svg" />
      </div>
      <div className={styles.links}>
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.buttons}>
        <Button title="Registruokis" />
        <LanguageSelectButton
          selectLanguage="LT"
          onSelectLanguage={() => console.log("selected")}
        />
      </div>
      <button className={styles.burger} onClick={toggleBurgerBtnOpen}>
        <img src={burgerMenu.src} />
      </button>
      <div
        className={`${styles.mobileNavMenu} ${
          isBurgerBtnOpen ? styles.mobileNavMenuOpen : ""
        }`}
      >
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.link} onClick={toggleBurgerBtnOpen}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileButtons}>
          <Button title="Registruokis" />
          <LanguageSelectButton
            selectLanguage="LT"
            onSelectLanguage={() => console.log("selected")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
