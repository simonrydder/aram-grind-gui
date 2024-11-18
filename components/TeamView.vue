<template>
  <div class="column-split">
    <div class="child red">
      <LoadingImage
        v-for="index in red.size"
        :player="red.players[index - 1]"
        :champion="red.champions[index - 1]"
        :key="index"
      ></LoadingImage>
    </div>
    <div class="child blue">
      <LoadingImage
        v-for="index in blue.size"
        :player="blue.players[index - 1]"
        :champion="blue.champions[index - 1]"
        direction="column"
        :key="index"
      ></LoadingImage>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  red: {
    type: Object,
    required: true,
  },
  blue: {
    type: String,
    required: true,
  },
});

const titleBorderStyle = computed(() => ({
  borderRight: props.direction === "row" ? "solid black" : "none",
  borderLeft: props.direction === "row-reverse" ? "solid black" : "none",
}));
</script>
<style scoped>
.column-split > *:not(:last-child) {
  border-bottom: 1px solid black; /* Add the desired border style */
}

.child.red {
  background: rgba(255, 0, 0, 0.4);
}

.child.blue {
  background: rgba(0, 0, 255, 0.4);
}
</style>
