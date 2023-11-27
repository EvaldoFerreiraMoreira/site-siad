"use client";

import React, { useState, useEffect } from "react";
import BannerCarrosselMobile from "./componentsMobile/BannerCarrosselMobile";
import BannerCarrosselWeb from "./componentsWeb/BannerCarrosselWeb";



const TextCenter = () => {
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

  return isMobile ? <BannerCarrosselMobile /> : <BannerCarrosselWeb/>;
};

export default TextCenter;
