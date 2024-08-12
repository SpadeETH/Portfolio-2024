"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BottomTextContainer from "../app/components/BottomTextContainer";
import ButtonHoverEffect from "../app/components/ButtonHoverEffect";
import LanguageContext from "../app/components/context/LanguageContext";
import Footer from "../app/components/footer";
import translations from "../lib/translations";
import logospade from "../public/images/logospade.png";
import BigLines from "./biglines";
import ProjectHolder from "./components/ProjectHolder";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <main>
      <BigLines />
      <div className="w-100 mt-124 px-180">
        <div className="hero flex flex-col gap-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="img"
          >
            <Image src={logospade} alt="Logo Spade" width={32} height={29} />
          </motion.div>
          <div>
            <h1>
              {
                translations[language as keyof typeof translations]
                  .welcomeMessage
              }
            </h1>
            <button onClick={toggleLanguage}>
              {language === "en" ? "Switch to French" : "Passer à l'anglais"}
            </button>
          </div>
          <div className="title-container">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="calisto Arthur text-3xl text-black leading-10 flex flex-row items-center relative" // keeping relative here
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: "200px" }} // keeping the hitbox width
            >
              <span>Arthur Bossuyt</span>
              <FiArrowRight className="arrowIcon" />
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hover-text absolute left-[210px] ml-2 text-base text-gray-600"
                  style={{
                    whiteSpace: "nowrap", // Prevent text from wrapping
                    display: "block", // Ensures span behaves correctly
                    width: "auto", // Prevents width compression
                  }}
                >
                  Click to view more.{" "}
                </motion.span>
              )}
            </motion.h2>
            <div className={`main-content ${isHovered ? "blur" : ""}`}>
              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="calisto text-3xl text-black leading-10"
              >
                Product Designer
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="feur calisto text-3xl greytitle leading-10"
              >
                Redefining solutions with passion.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="feur calisto text-3xl greytitle leading-10"
              >
                From Vision to Excellence.
              </motion.h2>
            </div>
          </div>

          <div className={`main-content ${isHovered ? "blur" : ""}`}>
            <div className="social-intro flex flex-col gap-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="links"
              >
                <ButtonHoverEffect />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="intro flex flex-col gap-y-3"
              >
                <motion.h3 className="title text-base lightgrey">
                  Welcome to my portfolio
                </motion.h3>
                <motion.p className="paragraph text-base albra darkgrey">
                  As a passionate product designer with 2 years of experience, I
                  specialize in creating intuitive digital experiences. Through
                  my journey from self-learning and university to freelancing, I
                  have honed my skills in designing impactful solutions for
                  various projects.
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="projects"
            >
              <ProjectHolder />
            </motion.div>
            <BottomTextContainer />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
