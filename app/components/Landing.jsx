import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import styles from "../css/Landing.module.css";

// Composant pour les projets avec animation basée sur la visibilité
const AnimatedProjectCard = ({ project, animationDelay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition={{ duration: 0.6, delay: animationDelay }}
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
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    // Simuler un délai pour que les projets apparaissent après le header
    const timer = setTimeout(() => setProjectsVisible(true), 1500); // Ajustez le délai ici
    return () => clearTimeout(timer);
  }, []);

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
    // Ajoutez d'autres projets ici...
  ];

  return (
    <div className={styles.gridContainer}>
      {/* Projets fixes */}
      {projects.slice(0, 2).map((project, index) => (
        <AnimatedProjectCard
          key={index}
          project={project}
          animationDelay={1 + index * 0.2} // Délai fixe pour les deux premiers projets
        />
      ))}
      {/* Projets animés */}
      {projectsVisible &&
        projects.slice(2).map((project, index) => (
          <AnimatedProjectCard
            key={index + 2} // Assurez-vous que les clés sont uniques
            project={project}
            animationDelay={0.4 + index * 0.2} // Augmente le délai pour chaque projet suivant
          />
        ))}
    </div>
  );
};

export default Landing;
