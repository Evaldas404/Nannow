/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Review, { ReviewType } from "../Review/Review";
import styles from "./styles.module.css";
import arrow from "../../assets/arrowDown.svg";

type ReviewsProps = {
  reviews: ReviewType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  const [expand, setExpand] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(3);

  const parseDaysAgo = (ago: string): number => {
    const [value] = ago.split(" ");
    return parseInt(value, 10);
  };

  const sortedReviews = [...reviews].sort(
    (a, b) => parseDaysAgo(a.ago) - parseDaysAgo(b.ago)
  );


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setDisplayLimit(2);
      } else {
        setDisplayLimit(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onShowMore = () => setExpand(!expand);
  const lastestThreeReviews = expand
    ? sortedReviews
    : sortedReviews.slice(0, displayLimit);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Atsiliepimai ({reviews.length})</h2>

      <div className={styles.reviews}>
        {lastestThreeReviews.map((r) => (
          <Review
            key={r.id}
            id={r.id}
            name={r.name}
            ago={r.ago}
            text={r.text}
            rating={r.rating}
            imgUrl={r.imgUrl}
          />
        ))}
      </div>

      <div className={styles.button}>
        <button onClick={onShowMore}>
          <img src={arrow.src} className={expand ? styles.rotated : ""} />
          {expand ? "Suskleisti" : "Rodyti daugiau"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
