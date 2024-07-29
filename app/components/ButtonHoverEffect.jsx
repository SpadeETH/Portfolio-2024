import React, { useState, useRef } from "react";
import styles from "../css/ButtonHoverEffect.module.css";

const ButtonHoverEffect = () => {
  const [hoverPosition, setHoverPosition] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    opacity: 0,
  });

  const timeoutRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const rect = e.target.getBoundingClientRect();
    const containerRect = e.target.parentElement.getBoundingClientRect();
    const left = rect.left - containerRect.left;
    const top = rect.top - containerRect.top;

    setHoverPosition({
      width: rect.width,
      height: rect.height,
      left,
      top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverPosition((prevState) => ({ ...prevState, opacity: 0 }));
    }, 500); // 0.5 seconds delay
  };

  return (
    <div className={styles.buttonContainer}>
      <div
        className={styles.hoverBg}
        style={{
          width: hoverPosition.width,
          height: hoverPosition.height,
          transform: `translate(${hoverPosition.left}px, ${hoverPosition.top}px)`,
          opacity: hoverPosition.opacity,
        }}
      ></div>
      <button
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://example.com" className={styles.link}>
          Email
        </a>
      </button>
      <button
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://example.com" className={styles.link}>
          X (Twitter)
        </a>
      </button>
      <button
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://example.com" className={styles.link}>
          LinkedIn
        </a>
      </button>
      <button
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="../../public/files/cv.pdf" download className={styles.link}>
          Download CV
        </a>
      </button>
    </div>
  );
};

export default ButtonHoverEffect;
