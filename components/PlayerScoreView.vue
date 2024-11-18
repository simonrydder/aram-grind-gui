<template>
  <div class="row-split">
    <div class="child rank" :style="{ fontSize: fontSize }">
      {{ `${rank}.` }}
    </div>
    <div class="child name" :style="{ fontSize: fontSize }">
      {{ player.name }}
    </div>
    <div class="child score" :style="{ fontSize: fontSize }">
      {{ player.score }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  fontSize: {
    type: String,
    default: "1rem",
  },
});
</script>

<style scoped>
.child {
  max-height: 100%;
  align-items: flex-end;
}

.child.rank {
  flex: 1;
  justify-content: center;
  /* border: red solid; */
}
.child.name {
  flex: 4;
  height: 100%;
  justify-content: left;
  max-height: 100%;
  /* border: green solid; */
  flex-wrap: nowrap;
}
.child.score {
  flex: 1;
  height: 100%;
  max-height: 100%;
  justify-content: center;
}
</style>
