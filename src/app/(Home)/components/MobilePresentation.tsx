"use client";

import React, { useState, useEffect } from "react";
import MobilePresentationMobile from "./componentsMobile/MobilePresentationMobile";
import MobilePresentationWeb from "./componentsWeb/MobilePresentationWeb";


const MobilePresentation = () => {
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

  return isMobile ? <MobilePresentationMobile /> : <MobilePresentationWeb/>;
};

export default MobilePresentation;
