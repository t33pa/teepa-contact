import { useContext, useEffect } from "preact/hooks";
import { LanguageContext } from "../lib/LanguageContext";

const buttonMessage = {
  en: "日本語に変更",
  ja: "English",
};

export function LanguageSwitchButton() {
  const context = useContext(LanguageContext);
  if (!context?.language || !context?.switchLanguage) {
    throw new Error("LanguageContext is not provided");
  }
  const { language, switchLanguage } = context;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <button
      onClick={switchLanguage}
      className="bg-gray-800 text-white p-2 rounded-lg mb-4 hover:bg-gray-700 duration-300"
    >
      {buttonMessage[language]}
    </button>
  );
}
