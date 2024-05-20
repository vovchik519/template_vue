<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="menu">
    <ul class="flex gap-2 justify-center">
      <li>
        <RouterLink to="/" class="hover:text-red-600 transition"
          >Главная</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
