"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import translations from "../../../lib/translations";
import BackToTop from "../../components/Backtotop";
import LanguageContext from "../../components/context/LanguageContext";

const Gallery: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const pageTranslations = translations[language as keyof typeof translations];
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);

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
        initial={{ opacity: 0, y: 20, filter: "blur(0px)" }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
          filter: inView ? "blur(0px)" : "blur(8px)",
        }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
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
    <main key={language} className="max-w-[1200px] w-full mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-[54px]">
        {headerVisible &&
          galleryImages.map((image, index) => (
            <ImageElement key={index} src={image} index={index} />
          ))}
      </div>
      <BackToTop />
    </main>
  );
};

export default Gallery;
