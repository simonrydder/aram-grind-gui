// stores/usePlayerStore.js
import { defineStore } from "pinia";
import { callApi } from "~/composables/api";
const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

export const usePlayerStore = defineStore("player", {
  state: () => ({
    players: Array(10).fill({ name: "", score: 0 }),
  }),
  getters: {
    getPlayerByIndex: (state) => {
      return (index) => {
        return state.players[index] || null;
      };
    },
  },
  actions: {
    async fetchScoreboard() {
      this.players = await callApi(
        "/game/scoreboard",
        "GET",
        null,
        "Failed to get scoreboard"
      );
    },
  },
});
