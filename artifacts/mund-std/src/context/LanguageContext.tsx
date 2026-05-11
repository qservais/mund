import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "fr", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
