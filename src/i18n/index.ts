import en from "./en";
import pt from "./pt";
import type { Lang, Translation } from "./types";

export const SUPPORTED_LANGS: Lang[] = ["pt", "en"];
export const DEFAULT_LANG: Lang = "pt";

const translations: Record<Lang, Translation> = {
  pt,
  en
};

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}

export function getTranslation(lang: string): Translation {
  if (isValidLang(lang)) {
    return translations[lang];
  }

  return translations[DEFAULT_LANG];
}

export function localizePath(lang: Lang, path = ""): string {
  if (!path) {
    return `/${lang}/`;
  }

  return `/${lang}/${path.replace(/^\/+/, "")}`;
}
