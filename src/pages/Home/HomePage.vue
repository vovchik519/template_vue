<script setup>
import UseIcon from '@/shared/ui/useIcon.vue';
import SwitchedLanguage from '@/features/SwitchedLanguage/SwitchedLanguage.vue';
</script>

<template>
  <SwitchedLanguage />
  <div class="flex">
    <useIcon link="template" class="min-w-5 w-5 h-5 fill-white stroke-black" />
    <h1>{{ $t('home.title') }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
