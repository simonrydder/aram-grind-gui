<template>
  <div class="page">
    <div class="column-split">
      <div class="child top">
        <TitleText message="Create new game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <div class="row-split">
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

const startGame = async () => {
  const isValid = nameStore.validateNames();

  if (isValid) {
    const response = await nameStore.addPlayers();
    console.log("HERE");

    if (response) {
      router.push("/game");
    }
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
