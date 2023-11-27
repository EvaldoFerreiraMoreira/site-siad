"use client";

import React, { useState, useEffect } from "react";
import BannerConsultantMobile from "./componentsMobile/BannerConsultantMobile";
import BannerConsultantWeb from "./componentsWeb/BannerConsultantWeb";


const BannerConsultant = () => {
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

  return isMobile ? <BannerConsultantMobile /> : <BannerConsultantWeb/>;
};

export default BannerConsultant;
