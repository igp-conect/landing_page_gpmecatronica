"use client";

import AOS from "aos";

import { useEffect } from "react";

export function Aos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <></>;
}
