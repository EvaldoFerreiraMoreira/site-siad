"use client";

import React, { useState, useEffect } from "react";
import TextCenterMobile from "./componentsMobile/TextCenterMobile";
import TextCenterWeb from "./componentsWeb/TextCenterWeb";


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

  return isMobile ? <TextCenterMobile /> : <TextCenterWeb/>;
};

export default TextCenter;
