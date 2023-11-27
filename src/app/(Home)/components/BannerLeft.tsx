"use client";

import React, { useState, useEffect } from "react";
import BannerLeftMobile from "./componentsMobile/BannerLeftMobile";

interface BannerLeftProps {
    title: String,
    description: String,
    img: String,
    colorTitle: String,
    colorDescription: String;
}

const BannerLeft = ({ title, description, img, colorTitle, colorDescription }: BannerLeftProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 860);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <BannerLeftMobile title={title} description={description} img={img} colorTitle={colorTitle} colorDescription={colorDescription} /> : " ";
};

export default BannerLeft;
