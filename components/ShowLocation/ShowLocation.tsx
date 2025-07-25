import React from "react";
import styles from "./styles.module.css";

type ShowLocationProps = {
  location: string;
};

const ShowLocation = ({ location }: ShowLocationProps) => {
  return (
    <div className={styles.locationWrapper}>
      <h2>Apytiksli lokacija</h2>
      <h4>{location}</h4>
      <div className={styles.main}>
        <div className={styles.mapBox}>
          <iframe
            className={styles.map}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ShowLocation;
