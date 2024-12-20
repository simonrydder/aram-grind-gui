// stores/useSavedGamesStore.js
import { defineStore } from "pinia";
import { callApi } from "~/composables/api";

export const useSavedGamesStore = defineStore("saves", {
  state: () => ({
    games: [],
  }),
  actions: {
    async fetchSavedGames() {
      this.games = await callApi(
        "/saves",
        "GET",
        null,
        "Failed to get saved games"
      );
    },
    async loadGame(game) {
      return await callApi(
        "/load",
        "POST",
        { name: game },
        `Failed to load game: ${game}`
      );
    },
  },
});
