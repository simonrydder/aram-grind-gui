<template>
  <div class="horizontal-container">
    <div class="child title">
      <TitleText message="Add players" height="80%"></TitleText>
    </div>
    <div class="child component">
      <PlayerGrid></PlayerGrid>
    </div>
  </div>
</template>

<script setup></script>

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
  flex: 90%;
}

.grid {
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
}
</style>
