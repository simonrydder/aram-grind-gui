<template>
  <div class="full-border">
    <div
      v-if="champion.loading"
      class="column-split"
      :style="{ flexDirection: direction }"
    >
      <img
        :src="champion.loading"
        alt="Champion Loading Image"
        class="child image"
      />
      <div class="child name">
        <TitleText :message="player.name" height="40%"></TitleText>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup>
const props = defineProps({
  player: {
    type: Object,
    default: () => ({}),
  },
  champion: {
    type: Object,
    default: () => ({}),
  },
  direction: {
    type: String,
    default: "column-reverse",
  },
});
</script>

<style scoped>
.full-border {
  width: 100%;
  max-width: 100%;
  height: 90%;
  max-height: 100%;
}

.child.image {
  flex: 80%;
  object-fit: contain;
}

.child.name {
  flex: 20%;
}
</style>
