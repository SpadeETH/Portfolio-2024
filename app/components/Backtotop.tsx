// components/ScrollToTopButton.tsx
import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportWidth = window.innerWidth;
      let scrollThreshold = 400; // Default threshold for small screens

      if (viewportWidth >= 1024) {
        scrollThreshold = 600; // Larger threshold for larger screens
      }

      if (window.scrollY > scrollThreshold) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScrollToTop && (
      <div
        onClick={scrollToTop}
        className="scroll-to-top fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer p-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white rounded-full z-50 transition-opacity duration-300 ease-in-out hover:bg-opacity-20 hover:shadow-sm"
        style={{
          opacity: showScrollToTop ? 1 : 0,
          transition:
            "opacity 0.7s ease-in-out, background-color 0.3s ease-in-out",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7-7-7 7"
          />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;
