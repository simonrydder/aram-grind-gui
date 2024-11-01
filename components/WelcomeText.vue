<template>
  <div class="welcome-text" ref="welcomeText">{{ message }}</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const message = "Welcome to ARAM Grind!";
const welcomeText = ref(null);

const adjustFontSize = () => {
  const element = welcomeText.value;
  if (!element) return;

  const parentWidth = element.clientWidth;
  const parentHeight = element.clientHeight;
  let fontSize = 10; // Start with a small font size
  element.style.fontSize = `${fontSize}px`;

  // Increase font size until it overflows the container
  while (
    element.scrollWidth <= parentWidth &&
    element.scrollHeight <= parentHeight
  ) {
    fontSize += 1;
    element.style.fontSize = `${fontSize}px`;
  }

  // Reduce font size by one step to prevent overflow
  fontSize -= 1;
  element.style.fontSize = `${fontSize}px`;
};

onMounted(adjustFontSize);
watch(() => message, adjustFontSize); // Re-run when the message changes

onMounted(() => {
  window.addEventListener("resize", adjustFontSize);
});
</script>

<style scoped>
.welcome-text {
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  /* border: solid black; */
  white-space: nowrap;
}
</style>
