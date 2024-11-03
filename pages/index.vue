<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child">
        <TitleText message="Welcome to ARAM Grind!" />
      </div>
      <div class="child buttons-container">
        <NuxtLink to="/game/new">
          <button class="menu-button" @click="newGame">New Game</button>
        </NuxtLink>
        <NuxtLink to="/game/load">
          <button class="menu-button" @click="loadGame">Load Game</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const newGame = () => {
  // Functionality for new game will be implemented later
};

const loadGame = () => {
  // Functionality for load game will be implemented later
};
</script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child.buttons-container {
  gap: 15%; /* Space between buttons */
}
</style>
