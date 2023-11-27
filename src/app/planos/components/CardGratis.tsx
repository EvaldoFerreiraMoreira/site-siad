"use client";

import React, { useState, useEffect } from "react";
import CardGratisMobile from "./componentsMobile/CardGratisMobile";



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

  return isMobile ? <CardGratisMobile /> : " ";
};

export default TextCenter;
