"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import translations from "../../../lib/translations";
import BackButton from "../../components/BackButton";
import BackToTop from "../../components/Backtotop";
import LanguageContext from "../../components/context/LanguageContext";
import LanguageSwitchButton from "../../components/LanguageSwitchButton";

const Gallery: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const pageTranslations = translations[language as keyof typeof translations];
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);
  const pageTranslationsSecondary =
    translations[language as keyof typeof translations].gallery;
  const galleryImages = Object.keys(pageTranslations.gallery.image).map(
    (key) =>
      pageTranslations.gallery.image[
        key as unknown as keyof typeof pageTranslations.gallery.image
      ]
  );

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [language]);

  const ImageElement: React.FC<{ src: string; index: number }> = ({
    src,
    index,
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
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
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full"
        key={`gallery-image-${index}`}
      >
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          layout="responsive"
          width={700} // Replace with actual width
          height={475} // Replace with actual height
          className="object-cover"
        />
      </motion.div>
    );
  };

  return (
    <main>
      <div key={language} className=" mx-auto p-4 w-100 mt-124 px-180">
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
        <div className="title-container mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-base lightgrey text-center mb-3"
          >
            {pageTranslationsSecondary.header.toptitle}
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="feur calisto text-3xl leading-10 text-neutral-600 text-center"
          >
            {pageTranslationsSecondary.header.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="intro flex flex-col gap-y-3"
          >
            <p className="text-base text-center albra text-neutral-600">
              {pageTranslationsSecondary.header.subtitle}
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-[54px]">
          {headerVisible &&
            galleryImages.map((image, index) => (
              <ImageElement key={index} src={image} index={index} />
            ))}
        </div>
        <BackToTop />
      </div>
    </main>
  );
};

export default Gallery;
