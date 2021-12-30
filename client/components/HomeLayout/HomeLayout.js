import React from "react";
import styles from "./HomeLayout.module.css";

// components
import MoviesList from "../MoviesList/MoviesList";

const HomeLayout = () => {
  console.log(styles);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["hidden-div"]}></div>
      <div className={styles["list-container"]}>
        <div className={styles["main-movie"]}>test</div>
        <MoviesList />
      </div>
    </div>
  );
};

export default HomeLayout;
