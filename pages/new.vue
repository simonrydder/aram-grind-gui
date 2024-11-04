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
            <AddPlayers></AddPlayers>
          </div>
        </div>
      </div>
      <div class="child bottom">
        <MenuButton title="Back" to="/"></MenuButton>
        <MenuButton title="Start" to="/game"></MenuButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  gap: 25%;
}
</style>
