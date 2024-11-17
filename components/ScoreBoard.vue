<template>
  <div class="board-grid">
    <div
      v-for="(player, index) in playerStore.players"
      :key="index"
      class="grid-child"
    >
      <PlayerScoreView :player="player" :index="index"></PlayerScoreView>
    </div>
  </div>
</template>

<script setup>
const playerStore = usePlayerStore();

onMounted(() => {
  playerStore.fetchScoreboard();
});
</script>

<style scoped>
.board-grid {
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  gap: 5%;
}

.grid-child {
  border: red solid;
}
</style>
