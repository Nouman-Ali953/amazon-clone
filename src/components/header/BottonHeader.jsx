"use client"
import React, {useState} from "react";
import styles from "./bottomHeader.module.scss";
import { signOut, useSession } from "next-auth/react";
const BottonHeader = () => {
    const [sign, setSign] = useState(false)
    const {status} = useSession()
  return (
    <>
      <div className={styles.bottomHeader}>
        <ul>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
          {
            status === 'authenticated'?
          <li onClick={signOut} style={{color:'orange'}}>Signout</li>:
          ''
          }
        </ul>
      </div>
    </>
  );
};

export default BottonHeader;
