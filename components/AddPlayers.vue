<template>
  <div class="column-split">
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

.column-split {
  border: solid green;
  border: none;
}

.child.title {
  flex: 10%;
}

.child.component {
  flex: 90%;
}
</style>
