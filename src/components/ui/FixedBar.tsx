"use client";

import { useEffect, useState } from "react";
import FixedBarMobile from "./FixedBarMobile";
import FixedBarWeb from "./FixedBarWeb";

const FixedBar = () => {
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

  return isMobile ? <FixedBarMobile /> : <FixedBarWeb />;
};

export default FixedBar;
