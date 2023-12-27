"use client";

import React, { useState, useEffect } from "react";
import CorroselMobileWeb from "./componentsWeb/CorroselMobileWeb";



const CarroselMobile = () => {
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

  return isMobile ?  <div></div>: <CorroselMobileWeb/> ;
};

export default CarroselMobile;
