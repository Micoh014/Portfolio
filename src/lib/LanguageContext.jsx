import { createContext, useContext, useState } from "react";

// Small key-based translation store — intentionally not a full i18n library
// since only the About/bio copy and project descriptions are translated for
// now. Add more keys to src/lib/translations.js as coverage grows.
const LanguageContext = createContext({ lang: "en", toggleLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "fil" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
