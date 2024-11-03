<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top">
        <TitleText message="Create new game!" width="80%" height="50%" />
      </div>
      <div class="child mid">
        <div class="vertical-container">
          <div class="child">
            <TitleText message="Add players" />
          </div>
          <div class="child">
            <TitleText message="Choose settings" />
          </div>
        </div>
      </div>
      <div class="child bottom">
        <nuxt-link to="/">
          <button class="menu-button">Back to Home</button>
        </nuxt-link>
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
}
</style>
