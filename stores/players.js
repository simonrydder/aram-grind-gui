import { defineStore } from "pinia";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    names: [], // Array to hold player names
  }),
  actions: {
    addPlayer(name) {
      if (name) {
        this.names.push(name);
      }
    },
    clearPlayer(index) {
      this.names.splice(index, 1);
    },
    updatePlayer(index, name) {
      if (name) {
        this.names[index] = name;
      }
    },
    resetPlayers() {
      this.names = [];
    },
  },
});
