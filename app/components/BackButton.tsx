import React, { useState, useRef } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "../css/BackButton.module.css";

const BackButton = () => {
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
    }, 500);
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
      <Link href="/">
        <div
          className={styles.backButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FiArrowLeft className={styles.icon} />
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
