import React from "react";
import styles from "./loading.module.scss";
const LoadingSpinner = () => {
  return (
    <>

    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
    </>
  );
};

export default LoadingSpinner;
