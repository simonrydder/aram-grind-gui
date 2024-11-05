// stores/playerStore.js
import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    names: Array(10).fill(""), // Initialize an array of 10 empty strings
  }),
  getters: {
    getNameByIndex: (state) => {
      return (index) => {
        return state.names[index] || ""; // Return the name at the given index, or an empty string if index is invalid
      };
    },
  },
  actions: {
    setNameByIndex(index, name) {
      if (index >= 0 && index < this.names.length) {
        this.names.splice(index, 1, name); // Use splice to ensure reactivity
      }
    },
  },
});
