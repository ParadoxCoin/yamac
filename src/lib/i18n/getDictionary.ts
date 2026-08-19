import type { Locale } from './config';

const dictionaries = {
  tr: () => import('./dictionaries/tr.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  ru: () => import('./dictionaries/ru.json').then((m) => m.default),
  ar: () => import('./dictionaries/ar.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries['tr']();
};
