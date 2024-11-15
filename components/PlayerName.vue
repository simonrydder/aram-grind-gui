<!-- PlayerName.vue -->
<template>
  <div class="row-split">
    <div class="child label">
      <!-- NameLabel component for name input -->
      <NameLabel
        :name="name"
        :isDisabled="isNameLabelDisabled"
        @update:name="onUpdateName"
      />
    </div>
    <div class="child clear">
      <!-- NameClearButton component to clear the name -->
      <NameClearButton
        :isDisabled="isNameClearButtonDisabled"
        @update:name="clearName"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { useNameStore } from "~/stores/useNameStore"; // Adjust path if necessary

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

// Access the player store and define local refs for computed properties
const playerStore = useNameStore();
const { index } = toRefs(props);

// Reactive reference to the name from the store
const name = computed({
  get: () => playerStore.names[index.value],
  set: (value) => playerStore.setNameByIndex(index.value, value),
});

// Computed property for disabling the NameLabel based on previous names
const isNameLabelDisabled = computed(() => {
  if (index.value === 0) return false; // First label is always enabled
  for (let i = 0; i < index.value; i++) {
    if (playerStore.names[i] === "") return true; // Disable if any previous names are empty
  }
  return false; // Enable if all previous labels have names
});

// Computed property for disabling the NameClearButton if the name is empty
const isNameClearButtonDisabled = computed(() => name.value === "");

// Update name in the store and emit event when input changes
const onUpdateName = (newName) => {
  name.value = newName;
};

// Clear the name in the store when clear button is clicked
const clearName = () => {
  name.value = "";
};
</script>

<style scoped>
@import url("~/assets/css/container.css");

.row-split {
  /* border: solid red; */
  gap: 2%;
}

.child.label {
  flex: 90%;
  /* border: red solid; */
}

.child.clear {
  flex: 10%;
  /* border: red solid; */
}
</style>
