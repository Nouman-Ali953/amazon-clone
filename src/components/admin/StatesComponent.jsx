import React from "react";
import styles from './component.module.scss'
import BarChart from "./Chart";
const StatesComponent = () => {
  return (
    <>
    <div className={styles.box_component}>

      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
    <BarChart/>
    </div>

    </>
  );
};

export default StatesComponent;
