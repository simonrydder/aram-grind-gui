<template>
  <div class="board-grid" ref="gridElement">
    <div
      v-for="(player, index) in playerStore.players"
      :key="index"
      class="grid-child"
      :style="{ height: height }"
    >
      <PlayerScoreView
        :player="player"
        :rank="getPlayerRank(index)"
        :font-size="fontSize"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePlayerStore } from "~/stores/usePlayerStore";

// Access player store
const playerStore = usePlayerStore();
const fontSize = ref(`1rem`);
const height = ref("100%");
const gridElement = ref(null);

// Computed property to calculate reactive ranks
const playerRanks = computed(() => {
  const ranks = [];
  const scoresSeen = new Set();

  playerStore.players.forEach((player, index) => {
    scoresSeen.add(player.score); // Add the score to the Set
    ranks[index] = scoresSeen.size; // Rank is based on unique scores seen so far
  });
  console.log("Ranks:", ranks);
  return ranks;
});

const updateFontSizes = async () => {
  await nextTick();
  const fontSizes = [];
  const clientWidth = gridElement.value.clientWidth * (4 / 6) * 1;
  const clientHeight = Math.floor(gridElement.value.clientHeight / 12);
  playerStore.players.forEach((player, index) => {
    fontSizes[index] = dynamicFontSize(player.name, clientWidth, clientHeight);
  });
  console.log("FontSizes:", fontSizes);
  let minFontSize = Math.min(...fontSizes);
  fontSize.value = `${minFontSize}px` || "1rem";
  height.value = `${clientHeight}px`;
};

// Function to get rank for a specific player by index
const getPlayerRank = (index) => playerRanks.value[index];

// Fetch players when the component mounts
onMounted(() => {
  playerStore.fetchScoreboard();
  updateFontSizes();
  window.addEventListener("resize", updateFontSizes);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateFontSizes);
  });
});

watch(
  () => playerStore.players,
  async () => {
    await nextTick();
    updateFontSizes();
  },
  { deep: true }
);
</script>

<style scoped>
.board-grid {
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  gap: 1%;
  grid-auto-rows: auto;
  /* border: solid black; */
}

.grid-child {
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  /* border-bottom: black solid; */
}
</style>
