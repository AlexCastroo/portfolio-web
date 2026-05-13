import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key]) as string;
  };
}
