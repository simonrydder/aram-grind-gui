<!-- components/ChampionView.vue -->
<template>
  <div class="border">
    <div class="row-split">
      <div class="child title">
        <UprightTitle name="CHAMPIONS"></UprightTitle>
      </div>
      <div class="child grid">
        <ChampionGrid></ChampionGrid>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.border {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  padding-right: 10px;
  padding-bottom: 10px;
}

.child.title {
  padding-top: 10px;
  flex: 5%;
}

.child.grid {
  padding-top: 10px;
  flex: 95%;
}
</style>
