"use client";
import React from "react";
import { signIn } from "next-auth/react";
import styles from "./login.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/Footer";
const Login = () => {
  const router = useRouter();
  const handleSignInWithGitHub = async () => {
    const result = await signIn("github", { callbackUrl: "/" });

    // Check if the sign-in was successful before navigating
    if (result.error) {
      // Handle sign-in error
      console.error("Sign-in failed:", result.error);
    } else {
      // Sign-in was successful, navigate to the home page
      router.push("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleSignInWithGitHub}>
          <AiOutlineGithub /> click to sign in with GitHub
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
