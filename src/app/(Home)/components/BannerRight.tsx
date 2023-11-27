"use client";

import React, { useState, useEffect } from "react";
import BannerRightMobile from "./componentsMobile/BannerRightMobile";
import BannerRightWeb from "./componentsWeb/BannerRightWeb";

interface BannerRightProps {
    title: String,
    description: String,
    img: String,
    colortitle: String,
    colordescription: String,
    button: String
}

const BannerRight = ({ title, description, img, colortitle, colordescription, button }: BannerRightProps) => {
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

  return isMobile ? <BannerRightMobile title={title} description={description} img={img} colortitle={colortitle} colordescription={colordescription} button={button} /> : <BannerRightWeb  title={title} description={description} img={img} colortitle={colortitle} colordescription={colordescription} button={button} />;
};

export default BannerRight;
