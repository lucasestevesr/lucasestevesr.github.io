import { SUPPORTED_LANGS } from "@/i18n";

export function getLangStaticPaths() {
  return SUPPORTED_LANGS.map((lang) => ({ params: { lang } }));
}
