<template>
  <div>
    <button type="button" @click="() => language.setLanguage('en')">
      English
    </button>
    <button type="button" @click="() => language.setLanguage('ru')">
      Русский
    </button>
  </div>
</template>

<script setup>
import { useChangeLanguages } from '@/features/SwitchedLanguage/model/LanguageStore.js';

const language = useChangeLanguages();
</script>
