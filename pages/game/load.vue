<template>
  <div class="page-container">
    <div class="top-section">
      <h1 class="welcome-message">Load Game</h1>
    </div>
    <div class="bottom-section">
      <nuxt-link to="/">
        <button class="menu-button">Back to Home</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("~/assets/menu_button.css");

/* Same styles as in new.vue */
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */
}

.top-section {
  flex: 2; /* Takes up 2/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.bottom-section {
  flex: 1; /* Takes up 1/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-message {
  font-size: 2rem;
  text-align: center;
}
</style>
