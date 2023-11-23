"use client";

import { useEffect, useState } from "react";
import FooterMobile from "./componentsMobile/FooterMobile";
import FooterWeb from "./componentsWeb/FooterWeb";

const Footer = () => {
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

  return isMobile ? <FooterMobile /> : <FooterWeb />;
};

export default Footer;
