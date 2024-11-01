<template>
  <div class="container">
    <!-- <div>
      <ViewportWidthLabel />
    </div> -->
    <div class="top-section">
      <WelcomeText />
    </div>
    <div class="bottom-section">
      <NuxtLink to="/game/new">
        <button class="menu-button" @click="newGame">New Game</button>
      </NuxtLink>
      <NuxtLink to="/game/load">
        <button class="menu-button" @click="loadGame">Load Game</button>
      </NuxtLink>
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

.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */
}

.top-section {
  flex: 1; /* Takes up 2/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  text-align: center;
}

.bottom-section {
  flex: 1; /* Takes up 1/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%; /* Space between buttons */
}

.welcome-message {
  /* max-width: 80%; */
  font-size: calc(7vw + 5px); /* Responsive scaling of font size */
  white-space: nowrap; /* Prevent line breaks */
}
</style>
