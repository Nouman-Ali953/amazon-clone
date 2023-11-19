import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import GotoLinks from "./GotoLinks";

const Footer = () => {
 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper_wrapper}>
          <div className={styles.imgs}>
            <Image src="/logo.png" width={110} height={40} alt="logo" />
          </div>
          <div className={styles.to_top}>
            <p >Back to top</p>
          </div>
        </div>
        <div className={styles.lower_wrapper}>
          <hr />
          <div className={styles.goto}>
            <GotoLinks
              first={
                <>
                  <p> Amazon Music</p>
                  <p className={styles.light}>Stream millions of songs</p>
                </>
              }
              second={
                <>
                  <p>Amp</p>
                  <p className={styles.light}>
                    Host your own live radio show with music you love
                  </p>
                </>
              }
              third={
                <>
                  <p>IMDB</p>
                  <p className={styles.light}>Movies, TV & Celebrities</p>
                </>
              }
              fourth={
                <>
                  <p>Ring</p>
                  <p className={styles.light}>Smart Home Security Systems</p>
                </>
              }
            />
            <GotoLinks
              first={
                <>
                  <p>IMDbPro</p>
                  <p className={styles.light}>
                    Get Info Entertainment Professionals Need
                  </p>
                </>
              }
              second={
                <>
                  <p>Amazon Advertising</p>
                  <p className={styles.light}>
                    Find, attract, and engage customers
                  </p>
                </>
              }
              third={
                <>
                  <p>AmazonGlobal</p>
                  <p className={styles.light}>Ship Orders Internationally</p>
                </>
              }
              fourth={
                <>
                  <p>eero Wifi</p>
                  <p className={styles.light}>Stream 4K Video in Every Room</p>
                </>
              }
            />
            <GotoLinks
              first={
                <>
                  <p>eero Wifi</p>
                  <p className={styles.light}>Stream 4K Video in Every Room</p>
                </>
              }
              second={
                <>
                  <p>Amazon web</p>
                  <p className={styles.light}>
                    Scalable Cloud Computing Services
                  </p>
                </>
              }
              third={
                <>
                  <p>Neigbour app</p>
                  <p className={styles.light}>
                    Real-Time Crime & Safety Alerts
                  </p>
                </>
              }
              fourth={
                <>
                  <p>ShopBop</p>
                  <p className={styles.light}>Designer Fashion Brands</p>
                </>
              }
            />
            <GotoLinks
              first={
                <>
                  <p>ACX</p>
                  <p className={styles.light}>Audiobook Publishing Made Easy</p>
                </>
              }
              second={
                <>
                  <p>Audible</p>
                  <p className={styles.light}>
                    Listen to Books & Original Audio Performances{" "}
                  </p>
                </>
              }
              third={
                <>
                  <p>eero Wifi</p>
                  <p className={styles.light}>
                    Listen to Books & Original Audio Performances
                  </p>
                </>
              }
              fourth={
                <>
                  <p>Box Office</p>
                  <p className={styles.light}>Find Movie Box Office Data </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
