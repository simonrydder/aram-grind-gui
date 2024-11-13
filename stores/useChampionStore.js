// stores/useChampionStore.js
import { defineStore } from "pinia";

const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

export const useChampionStore = defineStore("champion", {
  state: () => ({
    champions: [],
  }),
  actions: {
    async fetchChampions() {
      this.champions = await callApi(
        "/game/champions",
        "GET",
        null,
        "Failed to fetch champions."
      );
    },
  },
});
