// stores/useNameStore.js
import { defineStore } from "pinia";

export const useNameStore = defineStore("name", {
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
    validateNames() {
      // Filter out non-empty names
      const nonEmptyNames = this.names.filter((name) => name.trim() !== "");

      // Check if there are at least 2 non-empty names
      if (nonEmptyNames.length < 2) {
        alert("You need at least two players.");
        return false;
      }

      // Check if all non-empty names are unique
      const uniqueNames = [...new Set(nonEmptyNames)];
      if (uniqueNames.length !== nonEmptyNames.length) {
        alert("All names must be unique.");
        return false;
      }

      // Check for no empty names between non-empty names
      for (let i = 1; i < this.names.length - 1; i++) {
        if (
          this.names[i].trim() === "" &&
          this.names[i - 1].trim() !== "" &&
          this.names[i + 1].trim() !== ""
        ) {
          alert("You cannot skip players.");
          return false;
        }
      }

      // If validation passes, return true
      console.log("Valid player names:", this.names);
      return true;
    },
  },
});
