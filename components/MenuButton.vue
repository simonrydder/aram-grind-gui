<template>
  <nuxt-link :to="to">
    <button class="menu-button">{{ title }}</button>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  to: {
    type: String,
  },
});
</script>

<style scoped>
@import url("~/assets/menu_button.css");

.menu-button {
  padding: 1.5vh 4vw;
  font-size: calc(1vw + 10px);
  cursor: pointer;
  background-color: #007bff; /* Button color */
  color: white; /* Text color */
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.menu-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
