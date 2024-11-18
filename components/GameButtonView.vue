<template>
  <div v-if="!roundStore.isActive" class="div">
    <div class="column-split">
      <div class="child title">
        <TitleText message="Action" height="100%"></TitleText>
      </div>
      <div class="child buttons">
        <FunctionalButton
          title="New Round"
          :func="() => roundStore.newRound()"
        ></FunctionalButton>
        <FunctionalButton title="Options" :func="testClick"></FunctionalButton>
        <FunctionalButton title="Save" :func="testClick"></FunctionalButton>
        <FunctionalButton title="Exit" :func="exitClick"></FunctionalButton>
      </div>
    </div>
  </div>
  <div v-else class="div">
    <div class="column-split">
      <div class="child title">
        <TitleText message="Choose winner" height="100%"></TitleText>
      </div>
      <div class="child buttons">
        <FunctionalButton
          title="Red"
          :func="() => roundStore.updateWinner('red')"
        ></FunctionalButton>
        <!-- <FunctionalButton title="Reroll" :func="testClick"></FunctionalButton> -->
        <FunctionalButton
          title="Blue"
          :func="() => roundStore.updateWinner('blue')"
        ></FunctionalButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const roundStore = useRoundStore();
const testClick = () => {
  console.log("TestClick");
  roundStore.setActiveRound(!roundStore.isActive);
};

const exitClick = () => {
  router.push("/");
};
</script>

<style scoped>
.div {
  border-left: solid black;
}

.child.title {
  flex: 20%;
  border-bottom: solid black;
}

.child.buttons {
  flex: 80%;
  display: grid;
}

.child.grid {
  flex: 1;
  display: grid;
}
</style>
