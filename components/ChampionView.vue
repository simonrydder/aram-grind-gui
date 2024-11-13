<template>
  <div class="vertical-container">
    <div class="child title">
      <UprightTitle name="CHAMPIONS"></UprightTitle>
    </div>
    <div class="child grid">
      <ChampionGrid></ChampionGrid>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.child.title {
  flex: 5%;
  /* border: red solid; */
}

.child.grid {
  flex: 95%;
  /* overflow: auto; */
}
</style>
