import { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return path; // fallback: return the key path
      }
    }
    return value;
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
