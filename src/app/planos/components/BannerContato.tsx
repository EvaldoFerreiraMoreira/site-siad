"use client";

import React, { useState, useEffect } from "react";
import BannerContatoMobile from "./componentsMobile/BannerContatoMobile";
import BannerContatoWeb from "./componentsWeb/BannerContatoWeb";



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

  return isMobile ? <BannerContatoMobile /> : <BannerContatoWeb/>;
};

export default TextCenter;
