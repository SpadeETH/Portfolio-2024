import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FiGlobe } from "react-icons/fi";
import styles from "../css/LanguageSwitchButton.module.css";
import LanguageContext from "./context/LanguageContext";

const LanguageSwitchButton: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <motion.button
      className={styles.languageSwitchButton}
      onClick={toggleLanguage}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
    >
      <FiGlobe style={{ marginRight: "8px" }} />
      {language === "en" ? "Switch to French" : "Passer à l'anglais"}
    </motion.button>
  );
};

export default LanguageSwitchButton;
