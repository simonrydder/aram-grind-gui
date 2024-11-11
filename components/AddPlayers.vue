<template>
  <div class="horizontal-container">
    <div class="child title">
      <TitleText message="Add players" height="80%"></TitleText>
    </div>
    <div class="child component">
      <PlayerGrid></PlayerGrid>
    </div>
    <div class="child add">
      <button @click="updateStore">Update</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "~/stores/usePlayerStore"; // Import the store

const store = usePlayerStore(); // Access the store

const updateStore = () => {
  console.log("Stored names:", store.names); // Log the stored names
};
</script>

<style scoped>
@import url("~/assets/css/container.css");

.horizontal-container {
  border: solid green;
  border: none;
}

.child.title {
  flex: 10%;
}

.child.component {
  flex: 80%;
}

.child.add {
  flex: 10%;
}

.grid {
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
}
</style>
