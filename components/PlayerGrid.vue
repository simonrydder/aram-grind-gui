<!-- PlayerGrid.vue -->
<template>
  <div class="grid-container">
    <!-- Render 10 PlayerName components in a grid -->
    <PlayerName v-for="index in 10" :key="index" :index="index - 1" />
  </div>
</template>

<script setup></script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%; /* Adjust spacing as needed */
  grid-auto-rows: minmax(0, 1fr); /* Ensures rows don't overflow */
  height: 90%;
  width: 90%;
  margin: auto;
  /* border: solid black; */
}
</style>
