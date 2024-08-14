"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BottomTextContainer from "../app/components/BottomTextContainer";
import LanguageContext from "../app/components/context/LanguageContext";
import Footer from "../app/components/footer";
import translations from "../lib/translations";
import logospade from "../public/images/logospade.png";
import BigLines from "./biglines";
import ButtonHoverEffect from "./components/ButtonHoverEffect";
import LanguageSwitchButton from "./components/LanguageSwitchButton";
import SimpleHolder from "./components/simpleholder";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useContext(LanguageContext);
  const [isClient, setIsClient] = useState(false);
  const pageTranslations =
    translations[language as keyof typeof translations].home;
  useEffect(() => {
    // Revenir à la position précédente du scroll lors de la navigation
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ou retournez un loader, spinner, etc.
  }

  return (
    <main>
      <BigLines />
      <div className="w-100 mt-124 px-180">
        <div className="hero flex flex-col gap-y-5">
          <motion.div
            key={`logo-${language}`}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="flex flex-row img w-full justify-between"
          >
            <Image src={logospade} alt="Logo Spade" width={39} height={35} />
            <LanguageSwitchButton />
          </motion.div>

          <div className="title-container" key={`title-container-${language}`}>
            <Link href="/about" passHref>
              <motion.h2
                key={`name-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="calisto Arthur text-3xl text-black leading-10 flex flex-row items-center relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ width: "200px" }}
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
                      whiteSpace: "nowrap",
                      display: "block",
                      width: "auto",
                    }}
                  >
                    {pageTranslations.header.hover}
                  </motion.span>
                )}
              </motion.h2>
            </Link>

            <div className={`main-content ${isHovered ? "blur" : ""}`}>
              <motion.h2
                key={`job-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="calisto text-3xl text-black leading-10"
              >
                {pageTranslations.header.job}
              </motion.h2>

              <motion.h2
                key={`text1-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="feur calisto text-3xl greytitle leading-10"
              >
                {pageTranslations.header.text1}
              </motion.h2>

              <motion.h2
                key={`text2-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="feur calisto text-3xl greytitle leading-10"
              >
                {pageTranslations.header.text2}
              </motion.h2>
            </div>
          </div>

          <div
            className={`main-content ${isHovered ? "blur" : ""}`}
            key={`content-${language}`}
          >
            <div className="social-intro flex flex-col gap-y-16">
              <motion.div
                key={`links-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="links"
              >
                <ButtonHoverEffect />
              </motion.div>

              <motion.div
                key={`intro-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="intro flex flex-col gap-y-3"
              >
                <motion.h3 className="title text-base lightgrey">
                  {
                    translations[language as keyof typeof translations].home.p1
                      .title
                  }
                </motion.h3>
                <motion.p className="paragraph text-base albra darkgrey">
                  {pageTranslations.p1.paragraph}
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              key={`projects-${language}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="projects"
            >
              <SimpleHolder />
            </motion.div>

            <BottomTextContainer />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
