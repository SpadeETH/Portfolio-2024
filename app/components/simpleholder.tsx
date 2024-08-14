"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
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

const SimpleHolder: React.FC = () => {
  // Correction du nom de la fonction
  const { language } = useContext(LanguageContext);

  const projectTranslations: Project[] =
    translations[language as keyof typeof translations].projectHolder.projects;

  return (
    <div className={styles.gridContainer}>
      {projectTranslations.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <Link href={project.link} scroll={false}>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={530}
                height={375}
              />
            </div>
            <h2>{project.title}</h2>
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SimpleHolder;
