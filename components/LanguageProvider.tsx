"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "ta" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);


export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [language, setLanguageState] =
    useState<Language>("ta");


  // LOAD SAVED LANGUAGE
  useEffect(() => {

    const savedLanguage =
      localStorage.getItem("site-language");

    if (
      savedLanguage === "ta" ||
      savedLanguage === "en"
    ) {
      setLanguageState(savedLanguage);
    }

  }, []);


  // CHANGE + SAVE LANGUAGE
  const setLanguage = (lang: Language) => {

    setLanguageState(lang);

    localStorage.setItem(
      "site-language",
      lang
    );

  };


  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {

  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}