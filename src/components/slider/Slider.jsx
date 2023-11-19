"use client";
import { bannerData } from "@/contants/data";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlaySpeed={3000}
        showThumbs={false}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        showArrows={false}
      >
        {bannerData.map((imgs) => (
          <Image src={imgs.url} width={900} height={300} key={imgs.id} />
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
