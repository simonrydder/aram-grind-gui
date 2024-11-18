<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <ChampionView></ChampionView>
      </div>
      <div class="child bottom">
        <div class="row-split">
          <div class="child left">
            <ScoreboardView></ScoreboardView>
          </div>
          <div class="child middel"></div>
          <div class="child right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.column-split {
  padding: 0;
}
.child.top {
  flex: 4;
  max-height: 40%;
  max-width: 100%;
  margin: 5px;
}

.child.bottom {
  flex: 6;
  max-width: 100%;
  max-height: 60%;
}

.child.left {
  flex: 1;
  /* border: red solid; */
}

.child.middel {
  flex: 3;
  /* border: blue solid; */
}

.child.right {
  flex: 1;
  /* border: green solid; */
}
</style>
