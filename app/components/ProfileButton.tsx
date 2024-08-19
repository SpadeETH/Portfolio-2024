"use client;";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import { FiUser } from "react-icons/fi";
import LanguageContext from "../../app/components/context/LanguageContext";
import translations from "../../lib/translations";
import styles from "../css/ProfileButton.module.css";

const ProfileButton: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const pageTranslations =
    translations[language as keyof typeof translations].buttonspecial;

  return (
    <Link href="/about" passHref>
      <motion.a
        className={styles.profileButton}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0, ease: "easeInOut" }}
        whileHover={{ backgroundColor: "#f9f9f9" }}
        whileTap={{ scale: 0.95 }}
      >
        <FiUser style={{ marginRight: "8px" }} />
        {pageTranslations.profile}
      </motion.a>
    </Link>
  );
};

export default ProfileButton;
