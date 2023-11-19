"use client";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import BottonHeader from "./BottonHeader";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Button, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "@/redux/actions/cartActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogStyle = {
  height: "5rem",
  width: "17rem",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  position: "absolute",
  top: "2.4rem",
  right: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const StyledButton = styled(Button)({
  backgroundColor: "#FFD814",
  padding: "5px 70px",
  textTransform: "capitalize",
  textDecoration: "none",
  color: "black",
  "&:hover": {
    backgroundColor: "#FFD814",
  },
});

const StyledText = styled(Typography)({
  paddingTop: "3px",
  fontSize: "12px",
  "& > a": {
    color: "blue",
  },
});
const Header = () => {
  const [signin, setSignIn] = useState(false);
  const { status, data } = useSession();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { products } = useSelector((state) => state.favouriteReducer);
  console.log(products.length);
  const dispatch = useDispatch()

  const HandleSignIn = () => {
    setSignIn(!signin);
  };

  
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" width={100} height={35} alt="logo" />
          </Link>
        </div>
        <div className={styles.deliver}>
          <SlLocationPin />
          <div className={styles.deli_text} >
            <p>Deliver to</p>
            <h4>Pakistan</h4>
          </div>
        </div>
        <div className={styles.search}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Amazon Products"
          />
          <button className={styles.search_button}>
            <HiOutlineSearch />
          </button>
        </div>
        <div className={styles.signin}>
          {status === "unauthenticated" ? (
            <>
              <p>Hello, sign in</p>
              <p className={styles.account_text}>
                Account & Lists{" "}
                <span>
                  <BiCaretDown onClick={HandleSignIn} />
                </span>
              </p>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src={data?.user.image}
                    width={26}
                    height={26}
                    alt="usrImage"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div style={{ paddingLeft: "7px" }}>
                  <p>{data?.user.name}</p>
                  <p>{data?.user.email}</p>
                </div>
              </div>
            </>
          )}
          {signin === true ? (
            <>
              <Dialog
                open={setSignIn}
                PaperProps={{ sx: DialogStyle }}
                TransitionComponent={Transition}
                keepMounted
                onClose={HandleSignIn}
                BackdropProps={{ style: { backgroundColor: "unset" } }}
                aria-describedby="alert-dialog-slide-description"
              >
                <Link href="/login">
                  <StyledButton onClick={HandleSignIn}>Sign in</StyledButton>
                </Link>
                <StyledText className={styles.newHere}>
                  New customer?{" "}
                  <Link href="/" onClick={HandleSignIn}>
                    Start here
                  </Link>
                </StyledText>
              </Dialog>
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles.favourite}>
          <p>Marked</p>
          <p className={styles.inner_text}>& Favourite</p>
          <span className={styles.favSpan}>{products.length}</span>
        </div>
        <Link href="/cart">
          <div className={styles.cartWrapper}>
            <span>{cartItems.length}</span>
            <Image src="/cartIcon.png" width={47} height={32} /> <h2>Cart </h2>
          </div>
        </Link>
      </nav>
      <BottonHeader />
    </>
  );
};

export default Header;
