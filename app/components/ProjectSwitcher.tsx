"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import translations from "../../lib/translations";
import styles from "../css/ProjectHolder.module.css";
import LanguageContext from "./context/LanguageContext";

// Define the Project interface
interface Project {
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectSwitcherProps {
  currentProjectTag: string;
}

const ProjectSwitcher: React.FC<ProjectSwitcherProps> = ({
  currentProjectTag,
}) => {
  const { language } = useContext(LanguageContext);
  const projectTranslations: Project[] =
    translations[language as keyof typeof translations].projectHolder.projects;

  // Filter out the current project based on its tag
  const otherProjects = projectTranslations.filter(
    (project) => project.tag !== currentProjectTag
  );

  // Only display two other projects
  const projectsToDisplay = otherProjects.slice(0, 2);

  return (
    <div className={styles.gridContainer}>
      {projectsToDisplay.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          project={project}
          buttonText="View Project"
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
      <Link href={project.link} scroll={false}>
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
            width={530}
            height={375}
          />
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
        </div>
      </Link>
      <Link href={project.link} scroll={false}>
        <h2 className={styles.projectTitle}>
          {project.title}
          <FiArrowRight className={styles.arrowIcon} />
        </h2>
      </Link>
      <p className={styles.projectDescription}>{project.description}</p>
    </motion.div>
  );
};

export default ProjectSwitcher;
