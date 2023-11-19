"use client"
import Footer from "@/components/footer/Footer";
import React, { useEffect } from "react";
import styles from "./success.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/redux/actions/cartActions";
const page = () => {
 const dispatch=  useDispatch()
  useEffect(() => {
    dispatch(emptyCart())
  }, [])
  
  return (
    <>
      <div className={styles.component}>
        <Image src="/last.png" width={300} height={200} alt="im" />
        <div>
          payment successfully! Enjoy our stuff{" "}
          <Link href="/" style={{fontWeight:'bolder'}}>Back to Home</Link>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
