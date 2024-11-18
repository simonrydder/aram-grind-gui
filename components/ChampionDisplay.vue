<template>
  <div class="champion-display">
    <div v-if="champion.image">
      <img
        :src="champion.image"
        alt="Champion Image"
        class="champion-square-image"
        :class="{ unavailable: !champion.available }"
      />
    </div>
    <div v-else>
      <label
        ref="labelElement"
        class="champion-square-text"
        :class="{ unavailable: !champion.available }"
      >
        {{ champion.name }}
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  champion: {
    type: Object,
    required: true,
  },
});

const labelElement = ref(null);

onMounted(() => {
  // Set the initial font size
  setFontSize(labelElement.value, 0.2);

  // Add a resize event listener to the window
  const resizeHandler = () => setFontSize(labelElement.value, 0.2);
  window.addEventListener("resize", resizeHandler);

  // Cleanup the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler);
  });
});
</script>

<style scoped>
.champion-display {
  aspect-ratio: 1 / 1;
  position: relative;
  box-sizing: border-box;
}

.champion-square-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.champion-square-image.unavailable {
  filter: grayscale(100%);
  opacity: 50%;
}

.champion-square-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  overflow-wrap: anywhere; /* Allow words to break and wrap */
  white-space: normal; /* Allow text to wrap naturally */
  border: 1px solid black;
}

.champion-square-text.unavailable {
  background-color: #ccc; /* Grey background when unavailable */
}
</style>
