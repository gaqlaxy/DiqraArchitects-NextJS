"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function AppInit({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("diqra_preloader");

    if (hasShown) {
      setShowPreloader(false);
      return;
    }

    sessionStorage.setItem("diqra_preloader", "true");
  }, []);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      {children}
    </>
  );
}
