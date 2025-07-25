/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import styles from "./styles.module.css";

export type ReviewType = {
  name: string;
  rating: number;
  ago: string;
  text: string;
  imgUrl: string;
  id: number;
};

const Review = ({ text, name, rating, ago, imgUrl }: ReviewType) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpant = () => setExpanded(!expanded);


  const renderStars = (count: number) => "★".repeat(count);
  const review = text;

  return (
    <div className={styles.main}>
      <div className={styles.reviewer}>
        <img src={imgUrl} />
        <div>
          <h3>{name}</h3>
          <h5>{ago}</h5>
        </div>
      </div>
      <div className={styles.rating}>{renderStars(rating)}</div>
      <div className={styles.review}>
        <p className={expanded ? styles.expanded : styles.truncated}>
          {review}
        </p>
        <button onClick={toggleExpant}>
          {expanded ? "Suskleisti" : "Daugiau"}
        </button>
      </div>
    </div>
  );
};

export default Review;
