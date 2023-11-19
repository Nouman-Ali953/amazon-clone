import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>This is the home page</h2>
        <Link href="/">click here to move to / page</Link>
      </div>
      <Footer/>
    </>
  );
};

export default page;
