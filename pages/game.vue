<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top">
        <ChampionView></ChampionView>
      </div>
      <div class="child bottom"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.child.top {
  /* border: green solid; */
  overflow: hidden;
}

.child.bottom {
  border-color: red;
  /* border-style: solid; */
}
</style>
