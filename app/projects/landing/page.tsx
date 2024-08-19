"use client";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import translations from "../../../lib/translations";
import BigLines from "../../biglines";
import BackToTop from "../../components/Backtotop";
import LanguageContext from "../../components/context/LanguageContext";
import Footer from "../../components/footer";
import Landing from "../../components/Landing";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectSwitcher from "../../components/ProjectSwitcher";

const PageProject: React.FC = () => {
  const currentProjectTag = "landing";
  const [headerVisible, setHeaderVisible] = useState(false);
  const { language } = useContext(LanguageContext);
  const pageTranslations =
    translations[language as keyof typeof translations].Landingheader;
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);
  const elements = [
    {
      type: "text",
      content: <></>,
    },

    // Add other elements here
  ];

  interface ElementProps {
    children: React.ReactNode;
    index: number;
  }

  const Element: React.FC<ElementProps> = ({ children, index }) => {
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
        key={`${language}-${index}`} // Use language and index for a stable key
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <main key={language}>
      {/* Adding key to the main container to trigger re-render on language change */}
      <BigLines />
      <div className="w-full mt-124 px-180 mx-auto flex flex-col gap-y-[80px]">
        <ProjectHeader
          key={`${language}-header`}
          title={pageTranslations.title}
          subtitle={pageTranslations.subtitle}
          description={pageTranslations.description}
          team={pageTranslations.team}
          tools={pageTranslations.tools}
          timeline={pageTranslations.timeline}
          disciplines={pageTranslations.disciplines}
        />

        <div className="w-full flex flex-col gap-8 mx-auto">
          <motion.div
            key={`${language}-landing`}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            className="projects"
          >
            <Landing />
          </motion.div>

          <div className="Main flex flex-col mx-auto gap-y-5 w-full lg:w-[1028px]">
            {headerVisible &&
              elements.map((el, index) => (
                <Element key={index} index={index}>
                  {el.content}
                </Element>
              ))}
          </div>
        </div>
        <div className="mt-16">
          <div className="HeroWrapper flex flex-col gap-y-4">
            <h2 className="w-full calisto text-3xl greytitle leading-10">
              {pageTranslations.next.title}
            </h2>

            <p>{pageTranslations.next.subtitle}</p>
            <hr />
            <ProjectSwitcher currentProjectTag={currentProjectTag} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1 }}
          className="bloctext env"
          key={`${language}-Footer`} // Use language and index for a stable key
        >
          <Footer />
        </motion.div>
      </div>

      <BackToTop />
    </main>
  );
};

export default PageProject;
