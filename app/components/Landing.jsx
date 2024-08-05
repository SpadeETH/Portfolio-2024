import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import styles from "../css/Landing.module.css";

const projects = [
  {
    title: "SendshortAI — Landing Page",
    subheading: "SENDSHORT",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/sendshort.png",
    link: "https://sendshort.ai/",
  },
  {
    title: "Ösmoz — Landing Page",
    subheading: "ÖSMOZ",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/osmoz.png",
    link: "https://www.agence-osmoz.com/",
  },
  {
    title: "SpyBox — Landing Page",
    subheading: "SPYBOX",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/spybox.png",
    link: "https://www.spybox.io/",
  },
  {
    title: "Jonathan Ecom — Landing Page",
    subheading: "JONATHAN ECOM",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/joecom.png",
    link: "https://www.jo-ecom.io/",
  },
  {
    title: "Cawatoès — Landing Page",
    subheading: "CAWATOES ",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/cawatoes.png",
    link: "https://pro.cawatoes.fr/",
  },
  {
    title: "Fusion Groupe — Landing Page",
    subheading: "FUSION",
    description:
      "One of the main problems we faced is a poor user interface that made people struggle on some steps. On top of that, we noticed that there were some unnecessary steps that could be removed.",
    image: "/images/Landings/fusion.png",
    link: "https://www.fusion-groupe.com/",
  },

  // Ajoute les autres projets ici...
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
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
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

const Landing = () => {
  return (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Landing;
