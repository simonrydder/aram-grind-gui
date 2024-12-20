<template>
  <div :class="['saved-game', { selected }]" @click="emitClick">
    {{ game }}
  </div>
</template>

<script setup>
const props = defineProps({
  game: { type: String, required: true },
  selected: { type: Boolean, default: false },
});

const emit = defineEmits(["click"]);

const emitClick = () => {
  emit("click");
};
</script>

<style scoped>
.saved-game {
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  height: 75px;
  font-size: 35px;
  text-align: center;
  align-content: center;
}

.saved-game:hover {
  background-color: #eaeaea;
}

.saved-game.selected {
  border: 2px solid #007bff; /* Highlight selected game */
  background-color: #f0f8ff; /* Optional background change */
}
</style>
