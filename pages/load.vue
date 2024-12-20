<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <TitleText message="Load game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <div class="row-split">
          <div class="child side"></div>
          <div class="child center">
            <LoadingGameSelector
              @selected-game="handleGameSelection"
            ></LoadingGameSelector>
          </div>
          <div class="child side"></div>
        </div>
      </div>
      <div class="child bottom">
        <MenuButton title="Back" to="/"></MenuButton>
        <MenuButton title="Start" @click="startGame"></MenuButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const gamesStore = useSavedGamesStore();

const selectedGame = ref(null);

const handleGameSelection = (game) => {
  selectedGame.value = game;
};

const loadGame = async () => {
  const response = gamesStore.loadGame(selectedGame.value);
};

const startGame = async () => {
  if (selectedGame.value) {
    const response = gamesStore.loadGame(selectedGame.value);
    if (response) {
      router.push("/game");
    }
  } else {
    alert("No game selected");
  }
};
</script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.child.top {
  flex: 20%;
}

.child.mid {
  flex: 60%;
  width: 100%;
}

.child.bottom {
  flex: 20%;
  gap: 25%;
}

.child.center {
  flex: 4;
}

.child.side {
  flex: 1;
}
</style>
