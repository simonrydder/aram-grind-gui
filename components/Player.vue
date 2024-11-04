<template>
  <div class="player">
    <input
      type="text"
      v-model="label"
      class="label-input"
      :placeholder="placeholder"
      ref="labelRef"
      @input="updatePlayer"
    />
    <button class="clear-button" @click="clearLabel">
      <img src="/static/clear.png" alt="Clear" class="clear-image" />
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { usePlayersStore } from "~/stores/players";

const store = usePlayersStore();

const props = defineProps({
  index: Number,
});

const label = ref(store.names[props.index] || "");
const placeholder = "Enter name..";
const labelRef = ref(null);

const clearLabel = () => {
  label.value = "";
  store.clearPlayer(props.index);
};

const updatePlayer = () => {
  store.updatePlayer(props.index, label.value);
};

onMounted(() => {
  window.addEventListener("resize", () => adjustFontSize(labelRef.value));
});

watch(label, (newValue) => {
  store.updatePlayer(props.index, newValue);
  () => {
    adjustFontSize(labelRef.value);
  };
});
</script>

<style scoped>
.player {
  display: flex;
  align-items: center;
  gap: 2%;
  width: 100%;
  height: 100%;
}

.label-input {
  flex: 9;
  width: 80%;
  height: 60%;
}

.clear-button {
  flex: 1;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.clear-image {
  width: 80%;
  height: 80%;
  transition: transform 0.1s, filter 0.1s;
}

.clear-button:hover .clear-image {
  transform: scale(1.3);
  filter: brightness(0.9);
}
</style>
