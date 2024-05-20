import { createI18n } from 'vue-i18n';
import { createPinia, setActivePinia } from 'pinia';
import { useChangeLanguages } from '@/features/SwitchedLanguage/model/LanguageStore.js';
import ru from './languages/ru.json';
import en from './languages/en.json';

const pinia = createPinia();
setActivePinia(pinia);
const language = useChangeLanguages();

const i18n = createI18n({
  locale: language.name,
  fallbackLocale: 'ru',
  messages: {
    ru: ru,
    en: en
  }
});
export default i18n;
