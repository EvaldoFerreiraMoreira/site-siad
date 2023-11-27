"use client";

import React, { useState, useEffect } from "react";
import CarrosselInfoMobile from "./componentsMobile/CarrosselInfoMonbile";
import CarrosselInfoWeb from "./componentsWeb/CarrosselInfoWeb";


const CarrosselInfo = () => {
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

  return isMobile ? <CarrosselInfoMobile /> : <CarrosselInfoWeb />;
};

export default CarrosselInfo;
