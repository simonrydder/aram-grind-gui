<template>
  <div class="horizontal-container">
    <div class="child title">
      <TitleText message="Add players" height="80%"></TitleText>
    </div>
    <div class="child component"></div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("~/assets/css/container.css");

.horizontal-container {
  border: solid green;
}

.child.title {
  flex: 20%;
}

.child.component {
  flex: 80%;
}
</style>
