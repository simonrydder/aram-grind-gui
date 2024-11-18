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
            <div>{{ roundStore.red }}</div>
            <div>{{ roundStore.blue }}</div>
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
const nameStore = useNameStore();
const roundStore = useRoundStore();

onMounted(() => {
  nameStore.setNameByIndex(0, "Danish and Tough");
  nameStore.setNameByIndex(1, "Eskild");
  nameStore.setNameByIndex(2, "Alex");
  nameStore.setNameByIndex(3, "Denze");
  nameStore.setNameByIndex(4, "Hanghøj");
  nameStore.setNameByIndex(5, "Peter");
  // nameStore.setNameByIndex(6, "Player 1");
  // nameStore.setNameByIndex(7, "Player 2");
  // nameStore.setNameByIndex(8, "Player 3");
  // nameStore.setNameByIndex(9, "Player 4");
  nameStore.addPlayers();
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
  /* border: red solid; */
}

.child.middel {
  flex: 4;
  display: grid;
  /* border: blue solid; */
}

.child.right {
  flex: 1;
  /* border: green solid; */
}
</style>
