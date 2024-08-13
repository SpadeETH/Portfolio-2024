import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../../app/components/context/LanguageContext";
import translations from "../../lib/translations";

const BottomTextContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const pageTranslations =
    translations[language as keyof typeof translations].home;

  // Utilisation de useInView pour détecter la visibilité des éléments
  const { ref: envRef, inView: envInView } = useInView({
    triggerOnce: true, // Détecte une seule fois
    threshold: 0.5, // Déclenche quand l'élément est à 50% visible
  });

  const { ref: unvRef, inView: unvInView } = useInView({
    triggerOnce: true, // Détecte une seule fois
    threshold: 0.5, // Déclenche quand l'élément est à 50% visible
  });

  // Animation des éléments quand ils deviennent visibles
  useEffect(() => {
    if (envInView) {
      // Ajoutez ici les actions d'animation si nécessaire
    }
  }, [envInView]);

  useEffect(() => {
    if (unvInView) {
      // Ajoutez ici les actions d'animation si nécessaire
    }
  }, [unvInView]);

  return (
    <div className="bottomtextcontainer">
      <motion.div
        ref={envRef}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView ? 1 : 0,
          y: envInView ? 0 : 20,
          filter: envInView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6 }}
        className="bloctext env"
      >
        <div className="title text-base lightgrey">
          {pageTranslations.pbottom.p1.title}
        </div>
        <p className="paragraph text-base darkgrey">
          {pageTranslations.pbottom.p1.paragraph}
        </p>
      </motion.div>
      <motion.div
        ref={envRef}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView ? 1 : 0,
          y: envInView ? 0 : 20,
          filter: envInView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6 }}
        className="bloctext env"
      >
        <div className="title text-base lightgrey">
          {pageTranslations.pbottom.p2.title}
        </div>
        <div className="paragraph text-base darkgrey">
          {pageTranslations.pbottom.p2.paragraph}
        </div>
      </motion.div>
    </div>
  );
};

export default BottomTextContainer;
