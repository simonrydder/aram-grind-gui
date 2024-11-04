<template>
  <div
    class="welcome-text"
    :style="{ width: width, height: height }"
    ref="welcomeText"
  >
    {{ message }}
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
  },
  width: {
    type: String,
    default: "80%",
  },
  height: {
    type: String,
    default: "20%",
  },
});

const welcomeText = ref(null);

onMounted(() => {
  adjustFontSize(welcomeText.value);
  window.addEventListener("resize", () => adjustFontSize(welcomeText.value));
});

// Re-run when the message changes
watch(
  () => props.message,
  () => {
    adjustFontSize(welcomeText.value);
  }
);
</script>

<style scoped>
.welcome-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  /* border: solid black; */
}
</style>
