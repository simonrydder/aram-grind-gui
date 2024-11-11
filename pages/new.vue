<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top">
        <TitleText message="Create new game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <div class="vertical-container">
          <div class="child">
            <AddPlayers></AddPlayers>
          </div>
          <div class="child">
            <ChooseSettings></ChooseSettings>
          </div>
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
const nameStore = useNameStore();
const router = useRouter();

const startGame = () => {
  // Validate player names using the store action
  const isValid = nameStore.validateNames();

  if (isValid) {
    // If validation passes, navigate to /game
    router.push("/game");
  } else {
    // If validation fails, show an alert or other feedback
    // alert("Please ensure all player names are valid before starting the game.");
  }
};
</script>

<style scoped>
@import url("~/assets/css/container.css");

.child.top {
  flex: 20%;
}

.child.mid {
  flex: 60%;
}

.child.bottom {
  flex: 20%;
  gap: 15%;
}
</style>
