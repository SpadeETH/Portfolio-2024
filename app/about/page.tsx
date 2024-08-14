"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../app/components/context/LanguageContext";
import Footer from "../../app/components/footer";
import translations from "../../lib/translations";
import Me from "../../public/images/head.png";
import BackButton from "./../components/BackButton";
import ButtonHoverEffect from "./../components/ButtonHoverEffect";
import LanguageSwitchButton from "./../components/LanguageSwitchButton";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useContext(LanguageContext);
  const [isClient, setIsClient] = useState(false);
  const pageTranslations =
    translations[language as keyof typeof translations].about;
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Le composant Element avec une prop pour désactiver les animations
  const Element = ({
    children,
    immediate = false, // Par défaut, les éléments ne s'affichent pas immédiatement
  }: {
    children: React.ReactNode;
    immediate?: boolean;
  }) => {
    const animationProps = {
      initial: { opacity: 0, y: 20, filter: "blur(8px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0.6, delay: immediate ? 0 : 0.1 },
    };

    return <motion.div {...animationProps}>{children}</motion.div>;
  };

  if (!isClient) {
    return null; // Or return a loader, spinner, etc.
  }

  return (
    <main>
      <div className="flex flex-col mx-auto w-100 mt-124 px-180">
        <div className="header mb-10 ">
          <motion.div
            key={`logo-${language}`}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="flex flex-row img w-full justify-between"
          >
            <BackButton />
            <LanguageSwitchButton />
          </motion.div>
        </div>
        <div className="w-full lg:w-[500px] hero flex flex-col gap-y-5 lg:mx-auto">
          <Element immediate>
            <div
              className="title-container"
              key={`title-container-${language}`}
            >
              <motion.h2
                key={`about-title-${language}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-base lightgrey text-center mb-3"
              >
                {pageTranslations.header.main}
              </motion.h2>
              <Element immediate>
                <motion.h3
                  key={`title1-${language}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="feur calisto text-3xl  leading-10 text-neutral-600 text-center"
                >
                  {pageTranslations.header.title1}
                </motion.h3>
              </Element>
              <Element immediate>
                <motion.h3
                  key={`title2-${language}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="feur calisto text-3xl  leading-10 text-neutral-600 text-center"
                >
                  {pageTranslations.header.title2}
                </motion.h3>
              </Element>
              <Element immediate>
                <motion.div
                  key={`image-${language}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="flex flex-row justify-center"
                >
                  <Image
                    src={Me}
                    alt=""
                    className="rounded-[full] mt-6	w-[124px]"
                  />
                </motion.div>
              </Element>
            </div>
          </Element>

          <Element>
            <div
              className={`main-content ${isHovered ? "blur" : ""}`}
              key={`content-${language}`}
            >
              <div className="social-intro flex items-center flex-col gap-y-16">
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
                  <Element immediate>
                    <motion.p className=" text-base albra text-neutral-600">
                      {pageTranslations.introduction.paragraph1}
                    </motion.p>
                  </Element>
                  <motion.p className="text-base albra text-neutral-600">
                    {pageTranslations.introduction.paragraph2}
                  </motion.p>
                </motion.div>
              </div>

              <Element>
                <div className="journey">
                  <motion.h2
                    key={`journey-title-${language}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="my-16 text-center calisto text-3xl text-gray-700 leading-10"
                  >
                    {pageTranslations.journey.title}
                  </motion.h2>

                  <div className="flex flex-col gap-8 align-start">
                    {pageTranslations.journey.timeline.map((item, index) => (
                      <motion.div
                        key={`timeline-${language}-${index}`}
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className="flex flex-col lg:flex-row albra justify-between w-full lg:w-[450px]"
                      >
                        <h3
                          className="lg:text-right lightgrey lg:w-[86px] lg:mr-[64px]"
                          // Adjust width and spacing
                        >
                          {item.year}
                        </h3>
                        <div
                          className="flex flex-col space-y-2"
                          style={{ width: "300px" }} // Set the content width
                        >
                          {item.event1 && (
                            <h4 className="font-medium text-black">
                              <span className="inline-block">
                                {item.event1.split(" ").map((word, idx) =>
                                  word === "autonome" ? (
                                    <span key={idx}>
                                      {word} <br />
                                    </span>
                                  ) : (
                                    <span key={idx}>{word} </span>
                                  )
                                )}
                                <span className="lightgrey whitespace-nowrap">
                                  {item.grey1}
                                </span>
                              </span>
                            </h4>
                          )}

                          {item.event2 && (
                            <h4 className="font-medium text-black">
                              <span className="inline-block whitespace-nowrap">
                                {item.event2.split(" ").map((word, idx) =>
                                  word === "Team:" || word === "Esport:" ? (
                                    <span key={idx}>
                                      {word} <br />
                                    </span>
                                  ) : (
                                    <span key={idx}>{word} </span>
                                  )
                                )}
                                <span className="lightgrey">{item.grey2}</span>
                              </span>
                            </h4>
                          )}

                          {item.event3 && (
                            <h4 className="font-medium text-black">
                              {item.event3}{" "}
                              <span className="lightgrey">{item.grey3}</span>
                            </h4>
                          )}
                          {item.travels && (
                            <div className="font-medium text-black">
                              {item.travels.map((travel, idx) => (
                                <div
                                  key={`travel-${index}-${idx}`}
                                  style={{ marginBottom: "8px" }}
                                >
                                  {travel.place}{" "}
                                  <span className="lightgrey">
                                    {travel.country}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Element>

              <Element>
                <div className="future">
                  <motion.h2
                    key={`future-title-${language}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="my-16 text-center calisto text-3xl text-gray-700 leading-10"
                  >
                    {pageTranslations.future.title}
                  </motion.h2>
                  <div className="flex flex-col gap-y-6">
                    <motion.p className="paragraph text-base albra darkgrey">
                      {pageTranslations.future.paragraph}
                    </motion.p>
                    <motion.p className="paragraph text-base albra darkgrey">
                      {pageTranslations.future.paragraph2}
                    </motion.p>

                    <ul className="paragraph text-base albra darkgrey">
                      {pageTranslations.future.roles.map((role, index) => (
                        <li className="mb-3" key={`role-${index}`}>
                          <span className="albra2">{role.role}:</span>{" "}
                          {role.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Element>
            </div>
          </Element>
        </div>
        <Footer />
      </div>
    </main>
  );
}
