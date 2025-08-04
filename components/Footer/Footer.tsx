/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import PlayButton from "../../assets/playButton.png";
import AppleButton from "../../assets/appleButton.png";

type FooterLink = {
  title: string;
  link: string;
};

type FooterProps = {
  nannow: FooterLink[];
  socials: FooterLink[];
  information: FooterLink[];
  contact: FooterLink[];
};

const Footer = ({ nannow, socials, information, contact }: FooterProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="https://nannow.app/images/Logo.svg" />
        <h5>
          © 2025 Nannow.app. <br /> Visos teisės saugomos.
        </h5>
        <h5>Pagaminta su ❤ Lietuvoje.</h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.links}>
          <h4>Nannow</h4>
          <nav>
            <ul>
              {nannow.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h4>Tinklai</h4>
          <nav>
            <ul>
              {socials.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h4>Informacija</h4>
          <nav>
            <ul>
              {information.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.links}>
          <h4>Pagalba</h4>
          <nav>
            <ul>
              {contact.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.right}>
        <h4>Atsisiųskite programėlę</h4>
        <div className={styles.buttons}>
          <img src={AppleButton.src} />
          <img src={PlayButton.src} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
