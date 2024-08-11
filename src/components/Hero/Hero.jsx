import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fatma Elzahraa Ashraf</h1>
        <p className={styles.description}>
          I'm a software engineer with a foundation in frontend and
          backend technologies. Passionate about creating visually appealing
          and user-friendly websites. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:fatmaserry16@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
