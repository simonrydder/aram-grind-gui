// stores/useChampionStore.js
import { defineStore } from "pinia";

export const useChampionStore = defineStore("champion", {
  state: () => ({
    champions: [],
  }),
  actions: {
    async fetchChampions() {
      const champions = await callApi(
        "/game/champions",
        "GET",
        null,
        "Failed to fetch champions."
      );

      const sortedChampions = champions
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.available - a.available);
      this.champions = sortedChampions;
    },
  },
});
