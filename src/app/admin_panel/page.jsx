"use client";
import { TextField, styled } from "@mui/material";
import React from "react";
import styles from "./login.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import Footer from "@/components/footer/Footer";

const TxtField = styled(TextField)({
  width: "50%",
  margin: ".6rem",
});
const initialFields = {
  username: "",
  password: "",
};
const Admin = () => {
  const [field, setField] = useState(initialFields);
  const router = useRouter()
  const onValueChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/admin", field);
    console.log(JSON.stringify(res))
    if (res.data.status === 200) {
      setField(initialFields);
      router.push('/admin')
      Cookies.set('token', res.data.token);
      localStorage.setItem('token',res.data.token)
    }
  };
  return (
    <>
      <div className={styles.login_component}>
        <div className={styles.form_wrapper}>
          <h4>login to access all the records and products</h4>
          <TxtField
            id="outlined-basic"
            label="username"
            variant="outlined"
            name="username"
            value={field.username}
            onChange={(e) => onValueChange(e)}
          />
          <TxtField
            type="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
            name="password"
            value={field.password}
            onChange={(e) => onValueChange(e)}
          />
          <button type="submit" onClick={(e) => submitForm(e)}>
            submit
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Admin;
