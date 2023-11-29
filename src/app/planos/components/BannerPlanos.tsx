"use client";

import React, { useState, useEffect } from "react";
import BannerPlanosMobile from "./componentsMobile/BannerPlanosMobile";
import BannerPlanosWeb from "./componentsWeb/BannerPlanosWeb";



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

  return isMobile ? <BannerPlanosMobile /> : <BannerPlanosWeb />;
};

export default TextCenter;
