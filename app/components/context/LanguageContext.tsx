"use client"; // Ajout en haut du fichier

import React, { createContext, ReactNode, useEffect, useState } from "react";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(
    typeof window !== "undefined" && localStorage.getItem("language")
      ? localStorage.getItem("language")!
      : "en"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
