<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child">
        <TitleText message="Welcome to ARAM Grind!" />
      </div>
      <div class="child buttons-container">
        <MenuButton title="New game" to="/new"></MenuButton>
        <MenuButton title="Load game" to="/load"></MenuButton>
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
