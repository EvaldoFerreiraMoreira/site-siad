"use client";

import React, { useState, useEffect } from "react";
import CarrosselFotosMobile from "./componentsMobile/CarrosselFotosMobile";


const CarrosselFotos = () => {
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

  return isMobile ? <CarrosselFotosMobile /> : " ";
};

export default CarrosselFotos;
