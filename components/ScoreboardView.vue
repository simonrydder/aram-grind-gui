<template>
  <div class="column-split">
    <div class="child title">
      <TitleText message="Scoreboard" height="100%"></TitleText>
    </div>
    <div class="child board">
      <ScoreBoard></ScoreBoard>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.column-split {
  border-right: solid black;
}

.child.title {
  flex: 20%;
  border-bottom: solid black;
}

.child.board {
  flex: 80%;
}
</style>
