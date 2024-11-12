<template>
  <div class="page">
    <div class="horizontal-container">
      <div class="child top"></div>
      <div class="child bottom"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("~/assets/css/container.css");

.child.top {
  /* flex: 40%; */
  border: green solid;
}

.child.bottom {
  /* flex: 60%; */
  border: red solid;
}
</style>
