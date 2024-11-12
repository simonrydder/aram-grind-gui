// stores/useNameStore.js
import { defineStore } from "pinia";
const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

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

    // Getter to get the non-empty names
    getNonEmptyNames: (state) => {
      return state.names.filter((name) => name.trim() !== "");
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
      const nonEmptyNames = this.getNonEmptyNames;

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
    async addPlayers() {
      try {
        const response = await fetch(`${apiBaseUrl}/new/add_players`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.getNonEmptyNames),
        });

        if (!response.ok) {
          throw new Error("Failed to add players");
        }
        // If successful, return true or perform any other logic you need
        return true;
      } catch (error) {
        console.error("Error sending player names to the API:", error);
        alert(
          "Error sending player names to the API. Please check your connection."
        );
        return false;
      }
    },
  },
});
