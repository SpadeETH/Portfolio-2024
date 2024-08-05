"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BigLines from "../../biglines";
import Landing from "../../components/Landing";
import ProjectHeader from "../../components/ProjectHeader";

const PageProject: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  const project = {
    title: "Landing Page Collection",
    subtitle: "A landing page collection from 2022",
    description:
      "J’ai eu l’occasion de participer avec Sendshort à la refonte totale de leur Produit / Site Internet. L’objectif étant de faciliter au maximum la création de vidéo au format vertical via l’intelligence artificielle.",
    team: [
      { name: "Dylan Williams", role: "(Web Developper)" },
      { name: "Logan Victorien", role: "(Motion Designer)" },
      { name: "Oriane Benatan", role: "(Web Developper)" },
      { name: "Arthur Bossuyt", role: "(Web Designer)" },
    ],
    tools: [{ name: "Figma" }, { name: "Webflow" }],
    timeline: "Q2 2022 - Q4 2023",
    disciplines: [{ name: "Web Design" }, { name: "Web Developement" }],
  };

  const elements = [
    {
      type: "text",
      content: <></>,
    },

    // Ajoutez d'autres éléments ici
  ];
  interface ElementProps {
    children: React.ReactNode;
  }
  const Element: React.FC<ElementProps> = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
          filter: inView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bloctext env"
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    // Simulate the delay for header animation completion
    const timer = setTimeout(() => setHeaderVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <BigLines />
      <div className="w-full mt-124 px-180 mx-auto flex flex-col gap-y-[80px]">
        <ProjectHeader
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          team={project.team}
          tools={project.tools}
          timeline={project.timeline}
          disciplines={project.disciplines}
        />

        <div className="w-full flex flex-col gap-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="projects"
          >
            <Landing />
          </motion.div>

          <div className="Main flex flex-col  mx-auto gap-y-5 w-full lg:w-[1028px]">
            {elements.map((el, index) => (
              <Element key={index}>{el.content}</Element>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageProject;
