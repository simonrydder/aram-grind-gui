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
      try {
        const response = await fetch(`${apiBaseUrl}/game/champions`);
        if (response.ok) {
          this.champions = await response.json();
        } else {
          console.error("Failed to fetch champions:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    },
  },
});
