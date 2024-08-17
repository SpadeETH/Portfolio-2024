import { motion } from "framer-motion";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../../app/components/context/LanguageContext";
import translations from "../../lib/translations";

const BottomTextContainer = () => {
  const { language } = useContext(LanguageContext);

  const pageTranslations =
    translations[language as keyof typeof translations].home;

  // Separate useInView hooks for independent animation triggers
  const { ref: envRef1, inView: envInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: envRef2, inView: envInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bottomtextcontainer">
      <motion.div
        ref={envRef1}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView1 ? 1 : 0,
          y: envInView1 ? 0 : 20,
          filter: envInView1 ? "blur(0px)" : "blur(8px)",
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
        ref={envRef2}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{
          opacity: envInView2 ? 1 : 0,
          y: envInView2 ? 0 : 20,
          filter: envInView2 ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.6 }}
        className="bloctext env"
      >
        <div className="title text-base lightgrey">
          {pageTranslations.pbottom.p2.title}
        </div>
        <p className="paragraph text-base darkgrey">
          {pageTranslations.pbottom.p2.paragraph}
        </p>
      </motion.div>
    </div>
  );
};

export default BottomTextContainer;
