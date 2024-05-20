import { defineStore } from 'pinia';
import { shallowRef } from 'vue';

export const useChangeLanguages = defineStore('changeLanguage', () => {
  const name = shallowRef(localStorage.getItem('language') || 'ru');

  const setLanguage = lang => {
    if (name.value !== lang) {
      localStorage.setItem('language', lang);
      name.value = lang;
      location.reload();
    }
  };
  return {
    name,
    setLanguage
  };
});
