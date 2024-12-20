<template>
  <div class="grid-container">
    <div class="grid">
      <SavedGame
        v-for="(game, index) in gamesStore.games"
        :key="index"
        :game="game"
        :selected="selectedGame === game"
        @click="selectGame(game)"
      />
    </div>
  </div>
</template>

<script setup>
const gamesStore = useSavedGamesStore();

// State for the currently selected game
const selectedGame = ref(null);

const emit = defineEmits(["selectedGame"]);

// Function to handle game selection
const selectGame = (game) => {
  if (selectedGame.value === game) {
    selectedGame.value = null; // Deselect if clicked again
  } else {
    selectedGame.value = game; // Select the clicked game
  }
  emit("selectedGame", selectedGame.value);
};

// Fetch games on mount
onMounted(() => {
  gamesStore.fetchSavedGames();
});
</script>

<style scoped>
.grid-container {
  padding: 10px;
  width: 100%;
  height: 100%;
}

.grid {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  overflow-y: auto;
  padding-right: 10px;
}

.grid::-webkit-scrollbar {
  width: 7px;
}

.grid::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.grid::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.grid::-webkit-scrollbar-track {
  background: transparent;
}
</style>
