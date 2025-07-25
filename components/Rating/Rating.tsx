/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import star0 from "../../assets/images/stars/Star0.svg";
import star1 from "../../assets/images/stars/Star1.svg";
import star2 from "../../assets/images/stars/Star2.svg";

type RaitingProps = {
  rating: number;
  reviewCount: number;
  title: string;
};

const Rating = ({ rating, reviewCount, title }: RaitingProps) => {
  return (
    <div className={styles.ratingWrapper}>
      <h2>Reitingas</h2>
      <div className={styles.main}>
        <h1>{rating}</h1>
        <div className={styles.title}>
          <img src={star0.src} />
          <img src={star1.src} />
          <img src={star2.src} />
          <h4>{title}</h4>
          <img src={star2.src} />
          <img src={star1.src} />
          <img src={star0.src} />
        </div>
        <div className={styles.rating}>
          <span>Remiantis</span>
          <span> {reviewCount} atsiliepimais</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
