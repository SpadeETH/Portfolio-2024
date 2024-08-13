"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../../app/components/context/LanguageContext";
import translations from "../../lib/translations"; // Import des traductions
import styles from "../css/Landing.module.css";

// Définition de l'interface pour les projets
interface Project {
  title: string;
  subheading: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
            width={1080}
            height={596}
          />
          <motion.div
            className={styles.overlay}
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.overlayTextWrapper}>
              <p className={styles.overlayText}>View Project</p>
            </div>
          </motion.div>
        </div>
      </Link>
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <h2 className={styles.projectTitle}>
          {project.title}
          <FiArrowRight className={styles.arrowIcon} />
        </h2>
      </Link>
      <p className={styles.projectDescription}>{project.description}</p>
    </motion.div>
  );
};

const Landing: React.FC = () => {
  const { language } = useContext(LanguageContext); // Récupère la langue actuelle depuis le contexte
  const t = translations[language as keyof typeof translations].landing; // Récupère les traductions pour les projets

  // Crée une liste de projets dynamiquement à partir des traductions
  const projects: Project[] = [
    t.sendshort,
    t.osmoz,
    t.spybox,
    t.jonathanecom,
    t.cawatoes,
    t.fusion,
    // Ajoutez d'autres projets ici si nécessaire...
  ];

  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Landing;
