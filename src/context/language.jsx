import React, { createContext, useEffect, useState } from "react";
import { LANGUAGE } from "../tools/constants";
import { flagImages } from "../languages/index";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("uz");
  const [selectedFlag, setSelectedFlag] = useState(flagImages["uz"]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      setSelectedFlag(flagImages[storedLanguage]);
    } else {
      localStorage.setItem(LANGUAGE, "uz");
    }
  }, []);

  const changeLanguage = (language) => {
    localStorage.setItem(LANGUAGE, language);
    setSelectedLanguage(language);
    setSelectedFlag(flagImages[language]);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, selectedFlag, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
