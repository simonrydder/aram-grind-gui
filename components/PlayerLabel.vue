<template>
  <div class="player-label" ref="labelElement">
    {{ name }}
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { setFontSize } from "~/composables/setFontSize";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Reference to the input element
const labelElement = ref(null);

// Recalculate font size on mount
onMounted(() => {
  // Set the initial font size
  setFontSize(labelElement.value, 0.5);

  // Add a resize event listener to the window
  const resizeHandler = () => setFontSize(labelElement.value, 0.5);
  window.addEventListener("resize", resizeHandler);

  // Cleanup the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler);
  });
});
</script>

<style scoped>
.player-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
}
</style>
