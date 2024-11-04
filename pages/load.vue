<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top">
        <TitleText message="Load game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <AddPlayers></AddPlayers>
      </div>
      <div class="child bottom">
        <MenuButton title="Back" to="/"></MenuButton>
        <MenuButton title="Stat" to="/game"></MenuButton>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
@import url("~/assets/menu_button.css");
@import url("~/assets/css/container.css");

.child.top {
  flex: 20%;
}

.child.mid {
  flex: 60%;
}

.child.bottom {
  flex: 20%;
  gap: 25%;
}
</style>
