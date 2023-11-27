"use client";

import React, { useState, useEffect } from "react";
import CommonQuestionMobile from "./componentsMobile/CommonQuestionMonbile";
import CommonQuestionWeb from "./componentsWeb/CommonQuestionWeb";



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

  return isMobile ? <CommonQuestionMobile /> : <CommonQuestionWeb/>;
};

export default TextCenter;
