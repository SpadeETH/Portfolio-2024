import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import styles from "../css/ProjectHolder.module.css";

const projects = [
  {
    title: "From MVP to French Market Leader",
    description: "SendshortAI — Website & App Design",
    image: "/images/Projets/miniatures/sendshort.png",
    link: "/projects/sendshort",
  },
  {
    title: "Developing a Crypto Portfolio Tracking Application",
    description: "Bitloom — App Design & Branding",
    image: "/images/Projets/miniatures/bitloom.png",
    link: "/projects/bitloom",
  },
  {
    title: "Create a CRM 0 → 1 (Personal Project)",
    description: "NexusAI — Website & App Design",
    image: "/images/Projets/miniatures/nexus.png",
    link: "/projects/landing",
  },
  {
    title: "Gallery",
    description: "Collection of UI shots",
    image: "/images/Projets/miniatures/other.png",
    link: "/projects/gallery",
  },
];

const ProjectCard = ({ project }) => {
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
      <Link href={project.link}>
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
              <p className={styles.overlayText}>View Project</p>
            </div>
          </motion.div>
        </div>
      </Link>
      <Link href={project.link}>
        <h2 className={styles.projectTitle}>
          {project.title}
          <FiArrowRight className={styles.arrowIcon} />
        </h2>
      </Link>
      <p className={styles.projectDescription}>{project.description}</p>
    </motion.div>
  );
};

const ProjectHolder = () => {
  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectHolder;
