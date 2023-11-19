"use client";
import Footer from "@/components/footer/Footer";
import Products from "@/components/products/Products";
import Slider from "@/components/slider/Slider";
import React from "react";

const page = () => {
  return (
    <>
      <Slider />
      <Products />
      <Footer/>
    </>
  );
};

export default page;
