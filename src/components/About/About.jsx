import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/edu.png")} className={styles.aboutIcon} alt="Education icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <div className={styles.collage}>
                <p>Cairo University</p>
                <p>2021 - Present</p>
              </div>
              <p>Bachelor’s Degree
                <br />
                Faculty of Computers and Artificial Intelligence 
                <br />
                Computer Science Major (GPA: 3.4/ 4.00)</p>  
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
