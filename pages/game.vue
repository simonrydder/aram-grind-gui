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
          <div class="child middel">
            <TeamView :red="roundStore.red" :blue="roundStore.blue"></TeamView>
          </div>
          <div class="child right">
            <GameButtonView></GameButtonView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const playerStore = usePlayerStore();
const roundStore = useRoundStore();

onMounted(() => {
  playerStore.fetchScoreboard();
});
</script>

<style scoped>
.child.top {
  flex: 4;
  max-height: 40%;
  border: black solid;
}

.child.bottom {
  flex: 6;
  max-height: 60%;
  border: solid black;
  border-top: none;
}

.child.left {
  flex: 1;
}

.child.middel {
  flex: 4;
  display: flex;
}

.child.right {
  flex: 1;
}
</style>
