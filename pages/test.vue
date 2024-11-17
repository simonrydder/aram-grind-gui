<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <MenuButton title="Back" to="/"></MenuButton>
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

<script setup>
const playerStore = usePlayerStore();
const nameStore = useNameStore();

onMounted(() => {
  nameStore.setNameByIndex(0, "Simon");
  nameStore.setNameByIndex(1, "Eskild");
  nameStore.setNameByIndex(2, "Alex");
  nameStore.setNameByIndex(3, "Denze");
  nameStore.addPlayers();
});
</script>

<style scoped>
.child.top {
  flex: 4;
  max-height: 40%;
  border: black;
}

.child.bottom {
  flex: 6;
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
