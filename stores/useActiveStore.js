// stores/roundStore.js
import { defineStore } from "pinia";

export const useRoundStore = defineStore("round", {
  state: () => ({
    isActive: false, // Set default value to true or whatever your initial state is
    red: {},
    blue: {},
  }),
  actions: {
    setActiveRound(value) {
      this.isActive = value;
    },
    async newRound() {
      console.log("New round clicked.");
      const teams = await callApi(
        "/game/new_round",
        "GET",
        null,
        "Failed to get new round"
      );
      if (teams) {
        this.red = teams[0];
        this.blue = teams[1];
        console.log("Red team:", this.red);
        console.log("Blue team:", this.blue);
        this.setActiveRound(true);
      }
    },
    async updateWinner(team) {
      console.log("Updated round winner:", team);
      await callApi(
        "/game/round_winner",
        "POST",
        { team: team },
        "Failed to update winner"
      );
      this.setActiveRound(false);
    },
  },
});
