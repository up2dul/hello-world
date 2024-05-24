import { useEffect, useState } from 'react';
import i18n from '~/i18n';

import { getCurrentLang } from '~/lib/utils';

export function useLang() {
  const [lang, setLang] = useState<string>(getCurrentLang());

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang: () => void = () => {
    setLang(prevLang => {
      const newLang = prevLang === 'en' ? 'id' : 'en';

      localStorage.setItem('lang', newLang);
      i18n.changeLanguage(newLang);
      return newLang;
    });
  };

  return { lang, toggleLang };
}
