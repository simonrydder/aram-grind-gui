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
const squareSize = 3.8; // in rem

// Dynamically set the grid style
const gridStyle = computed(() => ({
  display: "grid",
  width: "100%",
  height: "100%",
  gap: `10px`,
  gridTemplateColumns: `repeat(auto-fill, minmax(${squareSize}%, 1fr))`,
  gridAutoRows: `1fr`,
  overflow: "auto",
}));

onMounted(() => {
  championStore.fetchChampions();
});
</script>

<style scoped></style>
