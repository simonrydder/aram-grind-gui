<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <ChampionView></ChampionView>
      </div>
      <div class="child bottom">
        <div class="row-split">
          <div class="child left"></div>
          <div class="child middel"></div>
          <div class="child right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.child.top {
  flex: 4;
  max-height: 40%;
}

.child.bottom {
  flex: 6;
  max-height: 60%;
}

.child.left {
  flex: 1;
  border: red solid;
}

.child.middel {
  flex: 3;
  border: blue solid;
}

.child.right {
  flex: 1;
  border: green solid;
}
</style>
