<template>
  <div class="grid-container">
    <NameLabel
      v-for="(name, index) in playerStore.names"
      :key="index"
      :modelValue="playerStore.getNameByIndex(index)"
      :placeholder="`Enter name ${index + 1}`"
      :isDisabled="isDisabled[index]"
      @update:modelValue="updateName(index, $event)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePlayerStore } from "~/stores/usePlayerStore"; // Adjust the path as necessary

const playerStore = usePlayerStore();

// Update the name in the store
const updateName = (index, value) => {
  playerStore.setNameByIndex(index, value);
};

// Create a computed property for the disabled state of each label
const isDisabled = computed(() => {
  return playerStore.names.map((name, index) => {
    if (index === 0) {
      return false; // The first label is always enabled
    }
    return playerStore.names[index - 1] === ""; // All other labels depend on the previous one
  });
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Adjust spacing as needed */
  height: 40vh;
  width: 80vw;
}

.border {
  border: solid black;
}
</style>
