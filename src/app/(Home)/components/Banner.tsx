"use client";

import React, { useState, useEffect } from "react";
import BannerMobile from "./componentsMobile/BannerMobile";
import BannerWeb from "./componentsWeb/BannerWeb";



const Banner = () => {
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

  return isMobile ? <BannerMobile  /> : <BannerWeb  />;
};

export default Banner;
