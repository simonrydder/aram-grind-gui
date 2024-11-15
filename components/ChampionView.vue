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
  border: black solid;
  border-top: black solid;
  width: 100%;
  height: 95%;
  padding: 10px;
  padding-bottom: 0px;
}

.child.title {
  flex: 5%;
}

.child.grid {
  flex: 95%;
}
</style>
