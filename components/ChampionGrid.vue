<!-- components/ChampionGrid.vue -->
<template>
  <div :style="gridStyle" class="grid">
    <ChampionDisplay
      v-for="(champion, index) in championStore.champions"
      :key="index"
      :champion="champion"
    ></ChampionDisplay>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
const championStore = useChampionStore();

// Define the reactive size for each square (adjust as desired)
const squareSize = 3.5; // in rem

// Dynamically set the grid style
const gridStyle = computed(() => ({
  display: "grid",
  width: "100%",
  height: "100%",
  gap: `10px`,
  gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}%, 1fr))`,
  gridAutoRows: `1fr`,
  overflow: "scroll",
  paddingRight: "10px",
}));

onMounted(() => {
  championStore.fetchChampions();
});
</script>

<style scoped>
/* Minimalistic scrollbar styling */
.grid::-webkit-scrollbar {
  width: 8px; /* Customize the scrollbar width */
}

.grid::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* Color of the scrollbar thumb */
  border-radius: 4px; /* Rounded corners for a sleeker look */
}

.grid::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3); /* Darker on hover */
}

.grid::-webkit-scrollbar-track {
  background: transparent; /* Transparent background for a cleaner look */
}
</style>
