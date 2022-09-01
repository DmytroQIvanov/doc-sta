import React, { useState } from "react";
import styles from "./Navigation.module.scss";

const buttonsArray: {
  label: string;
  style?: "red" | "purple" | "default";
  link?: string;
}[] = [
  {
    label: "Training",
  },
  {
    label: "Book a Class",
    style: "red",
  },
  {
    label: "Webinars",
  },
  {
    label: "Online Classes",
  },
  {
    label: "Team Learning",
  },

  {
    label: "Career Counselling",
  },
  {
    label: "Blog",
  },
  {
    label: "Deals",
  },
  {
    label: "Most Popular",
    style: "purple",
  },
  {
    label: "Free Life Tips",
  },
  {
    label: "Favourites",
  },
];
const Navigation = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_content}>
        {buttonsArray.map((elem, index) => (
          <span
            className={`${styles.elem} ${
              activeButton == index && styles.elem_active
            } ${styles["elem_" + elem.style]}`}
            onClick={() => setActiveButton(index)}
          >
            {elem.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
