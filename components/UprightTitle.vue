<template>
  <div ref="containerRef" class="name-container">
    <span ref="textRef" class="name-text">{{ name }}</span>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watchEffect } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// References for the container and text element
const containerRef = ref(null);
const textRef = ref(null);

// Adjust font size function
const adjustFontSize = (element) => {
  if (!element) return;

  const parentWidth = element.parentElement.clientWidth;
  const parentHeight = element.parentElement.clientHeight;
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
  fontSize -= 5;
  element.style.fontSize = `${fontSize}px`;
};

// Resize observer to adjust font size when container resizes
onMounted(() => {
  adjustFontSize(textRef.value);

  const resizeObserver = new ResizeObserver(() => {
    adjustFontSize(textRef.value);
  });

  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);
  }

  // Clean up observer on unmount
  onUnmounted(() => {
    resizeObserver.disconnect();
  });
});

// Adjust font size whenever the name prop changes
watchEffect(() => {
  nextTick(() => {
    adjustFontSize(textRef.value);
  });
});
</script>

<style scoped>
.name-container {
  width: 5vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.name-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  white-space: nowrap;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
