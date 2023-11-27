"use client";

import React, { useState, useEffect } from "react";
import BannerContatoMobile from "./componentsMobile/BannerContatoMobile";



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

  return isMobile ? <BannerContatoMobile /> : " ";
};

export default TextCenter;
