<template>
  <div>{{ player.name }}</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
  index: {
    type: Int16Array,
    required: true,
  },
});

// const labelElement = ref(null);

// onMounted(() => {
//   // Set the initial font size
//   setFontSize(labelElement.value, 0.2);

//   // Add a resize event listener to the window
//   const resizeHandler = () => setFontSize(labelElement.value, 0.2);
//   window.addEventListener("resize", resizeHandler);

//   // Cleanup the event listener when the component is unmounted
//   onBeforeUnmount(() => {
//     window.removeEventListener("resize", resizeHandler);
//   });
// });
</script>
