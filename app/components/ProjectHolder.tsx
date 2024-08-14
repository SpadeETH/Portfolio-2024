"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import translations from "../../lib/translations";
import styles from "../css/ProjectHolder.module.css";
import LanguageContext from "./context/LanguageContext";

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectHolder: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const buttonText =
    translations[language as keyof typeof translations].projectHolder.button;

  const projectTranslations: Project[] =
    translations[language as keyof typeof translations].projectHolder.projects;

  return (
    <div className={styles.gridContainer}>
      {projectTranslations.map((project, index) => (
        <ProjectCard
          key={`${language}-${index}`}
          project={project}
          buttonText={buttonText}
        />
      ))}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; buttonText: string }> = ({
  project,
  buttonText,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={styles.projectCard}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
        filter: inView ? "blur(0px)" : "blur(8px)",
      }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Link href={project.link} passHref>
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
            width={530}
            height={375}
          />
          {!isMobile && (
            <motion.div
              className={styles.overlay}
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.overlayTextWrapper}>
                <p className={styles.overlayText}>{buttonText}</p>
              </div>
            </motion.div>
          )}
        </div>
      </Link>
      <Link href={project.link} passHref>
        <h2 className={styles.projectTitle}>
          {project.title}
          <FiArrowRight className={styles.arrowIcon} />
        </h2>
      </Link>
      <p className={styles.projectDescription}>{project.description}</p>
    </motion.div>
  );
};

export default ProjectHolder;
