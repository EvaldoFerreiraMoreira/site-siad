"use client";

import React, { useState, useEffect } from "react";
import HeaderMobile from "./componentsMobile/HeaderMobile";
import HeaderWeb from "./componentsWeb/HeaderWeb";

const Header = () => {
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

  return isMobile ? <HeaderMobile /> : <HeaderWeb />;
};

export default Header;
