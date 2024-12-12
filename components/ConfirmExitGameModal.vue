<template>
  <div v-if="visible" class="custom-modal">
    <div class="modal-content">
      <p>Save game before exit?</p>
      <button @click="confirm(true)">Yes</button>
      <button @click="confirm(false)">No</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits(["close"]);

function confirm(choice) {
  emit("close", choice);
}
</script>

<style>
.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.modal-content {
  text-align: center;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #003f7f;
}
</style>
