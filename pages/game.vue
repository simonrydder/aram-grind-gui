<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <ChampionView></ChampionView>
      </div>
      <div class="child bottom">
        <!-- <ChampionView></ChampionView> -->
        <div>Something</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.child.top {
  max-height: 50%;
}

.child.bottom {
  max-height: 50%;
}
</style>
