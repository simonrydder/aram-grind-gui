<template>
  <button class="button" @click="func">{{ title }}</button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  func: {
    type: Function,
  },
});
</script>
