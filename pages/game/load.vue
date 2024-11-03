<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top">
        <TitleText message="Load game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <AddPlayers></AddPlayers>
      </div>
      <div class="child bottom">
        <nuxt-link to="/">
          <button class="menu-button">Back to Home</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child.top {
  flex: 20%;
}

.child.mid {
  flex: 60%;
}

.child.bottom {
  flex: 20%;
}

.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */
}

.top-section {
  flex: 20%; /* Takes up 2/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.mid-section {
  flex: 60%; /* Takes up 1/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-section {
  flex: 20%; /* Takes up 1/3 of the height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-message {
  font-size: 2rem;
  text-align: center;
}
</style>
