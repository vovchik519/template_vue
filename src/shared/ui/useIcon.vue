<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  }
});
</script>
<template>
  <!-- обязательно используйте цвет для fill или stroke, а так же min-width, width и height иначе иконка может отображаться не корректно -->
  <svg>
    <use :xlink:href="'/public/icon/sprite.svg#icon-' + link"></use>
  </svg>
</template>
