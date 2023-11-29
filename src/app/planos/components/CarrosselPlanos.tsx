"use client";

import React, { useState, useEffect } from "react";
import CarrosselPlanosMobile from "./componentsMobile/CarrosselPlanosMobile";
import CarrosselPlanosWeb from "./componentsWeb/CarrosselPlanosWeb";



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

  return isMobile ? <CarrosselPlanosMobile /> : <CarrosselPlanosWeb />;
};

export default TextCenter;
