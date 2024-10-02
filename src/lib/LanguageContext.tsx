import { createContext } from "preact";
import { useState } from "preact/hooks";
import { type Language } from "../types/Language";
import { ComponentChildren } from "preact"; // Import the type for children

// Define the context type
interface LanguageContextType {
  language: Language;
  switchLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageContextProviderProps {
  children: ComponentChildren;
}

export const LanguageProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  const switchLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
