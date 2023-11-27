"use client";

import React, { useState, useEffect } from "react";
import CardGratisMobile from "./componentsMobile/CardGratisMobile";
import CardGratisWeb from "./componentsWeb/CardGratisWeb";



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

  return isMobile ? <CardGratisMobile /> : <CardGratisWeb/>;
};

export default TextCenter;
