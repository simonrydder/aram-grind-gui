<template>
  <div class="page">
    <div class="column-split">
      <div class="child">
        <TitleText message="Welcome to ARAM Grind!" />
      </div>
      <div class="child buttons-container">
        <MenuButton title="New" @click="newGame"></MenuButton>
        <MenuButton title="Load game" @click="loadGame"></MenuButton>
        <!-- <MenuButton title="Test" @click="testGame"></MenuButton> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const initializeGame = async () => {
  return await callApi("/new", "POST", null, "Failed to initialize game");
};
const newGame = async () => {
  const response = await initializeGame();

  if (response) {
    router.push("/new");
  }
};

const loadGame = async () => {
  const response = await initializeGame();

  if (response) {
    router.push("/load");
  }
};
</script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child.buttons-container {
  gap: 15%; /* Space between buttons */
}
</style>
