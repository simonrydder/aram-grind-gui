<template>
  <div class="name-label">
    <input
      ref="inputElement"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="isDisabled ? '' : placeholder"
      :disabled="isDisabled"
      class="label-input"
    />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { setFontSize } from "~/composables/setFontSize";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Enter name..",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

// Reference to the input element
const inputElement = ref(null);

// Recalculate font size on mount
onMounted(() => {
  // Set the initial font size
  setFontSize(inputElement.value, 0.8);

  // Add a resize event listener to the window
  const resizeHandler = () => setFontSize(inputElement.value, 0.8);
  window.addEventListener("resize", resizeHandler);

  // Cleanup the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler);
  });
});
</script>

<style scoped>
.name-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.label-input {
  border: 1px solid #c0c0c0;
  padding: 0;
  border-radius: 0;
  width: 100%;
  height: 80%;
}

.label-input:disabled {
  background-color: #eeeeee;
}
</style>
