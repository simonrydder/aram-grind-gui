<template>
  <button class="clear-button" :disabled="isDisabled" @click="clearName">
    <img
      src="/static/clear.png"
      alt="Clear"
      class="clear-image"
      :disabled="isDisabled"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:name"]);

const clearName = () => {
  if (!props.isDisabled) {
    emit("update:name", ""); // Emit an empty string when the button is enabled
  }
};
</script>

<style scoped>
.clear-button {
  flex: 1;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* The scaling effect on hover only applies when not disabled */
.clear-button:not(:disabled):hover {
  transform: scale(1.3);
  filter: brightness(0.8);
}

.clear-image {
  width: 100%;
  height: 100%;
  transition: transform 0.1s, filter 0.1s;
}

/* Disable effect */
.clear-button:disabled {
  filter: grayscale(100%);
  opacity: 0.5;
  cursor: not-allowed;
}

.clear-button:disabled:hover {
  transition: none; /* Prevent any hover transition when disabled */
}
</style>
