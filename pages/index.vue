<template>
  <div class="page">
    <div class="column-split">
      <div class="child">
        <TitleText message="Welcome to ARAM Grind!" />
      </div>
      <div class="child buttons-container">
        <MenuButton title="New" @click="newGame"></MenuButton>
        <MenuButton title="Load game" to="/load"></MenuButton>
        <MenuButton title="Test" @click="testGame"></MenuButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const newGame = async () => {
  const response = await callApi(
    "/new",
    "POST",
    null,
    "Failed to initialize game"
  );

  if (response) {
    router.push("/new");
  }
};

const loadGame = () => {
  // Functionality for load game will be implemented later
};

const testGame = async () => {
  const response = await callApi(
    "/new",
    "POST",
    null,
    "Failed to initialize game"
  );

  if (response) {
    router.push("/test");
  }
  router.push("/test");
};
</script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child.buttons-container {
  gap: 15%; /* Space between buttons */
}
</style>
