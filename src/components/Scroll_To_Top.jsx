"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Scroll_To_Top = () => {
  const [IsVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ToggleVisibility = () => {
    if (window.scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ToggleVisibility);
    // return () => window.removeEventListener("scroll", ToggleVisibility);
  }, []);
  return (
    <>
      {IsVisible ? (
        <ArrowUp
          className="bg-black dark:bg-white dark:text-black fixed bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 lg:bottom-7 lg:right-7 text-white w-6 h-6 z-20 animate-bounce rounded-full p-0.5 cursor-pointer"
          onClick={() => scrollTop()}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Scroll_To_Top;
