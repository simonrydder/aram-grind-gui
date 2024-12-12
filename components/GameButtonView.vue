<template>
  <div v-if="!roundStore.isActive" class="div">
    <div class="column-split">
      <div class="child title">
        <TitleText message="Action" height="100%"></TitleText>
      </div>
      <div class="child buttons">
        <FunctionalButton
          title="New Round"
          :func="() => roundStore.newRound()"
        ></FunctionalButton>
        <FunctionalButton title="Options" :func="testClick"></FunctionalButton>
        <FunctionalButton title="Save" :func="saveClick"></FunctionalButton>
        <FunctionalButton title="Exit" :func="exitClick"></FunctionalButton>
      </div>
    </div>
    <!-- ConfirmExitGameModal -->
    <ConfirmExitGameModal :visible="isModalVisible" @close="handleModalClose" />
  </div>
  <div v-else class="div">
    <div class="column-split">
      <div class="child title">
        <TitleText message="Choose winner" height="100%"></TitleText>
      </div>
      <div class="child buttons">
        <FunctionalButton
          title="Red"
          :func="() => roundStore.updateWinner('red')"
        ></FunctionalButton>
        <!-- <FunctionalButton title="Reroll" :func="testClick"></FunctionalButton> -->
        <FunctionalButton
          title="Blue"
          :func="() => roundStore.updateWinner('blue')"
        ></FunctionalButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const roundStore = useRoundStore();

const isModalVisible = ref(false);

const testClick = () => {
  console.log("TestClick");
  roundStore.setActiveRound(!roundStore.isActive);
};

const saveClick = async () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeStamp = `${year}-${month}-${day} ${hours}-${minutes}-${seconds}`;

  const response = await callApi(
    "/game/save",
    "POST",
    { name: timeStamp },
    "Unable to save game."
  );

  alert(response.message);
};

const exitClick = () => {
  isModalVisible.value = true; // Show the modal
};

const handleModalClose = async (choice) => {
  isModalVisible.value = false; // Hide the modal
  if (choice) {
    await saveClick(); // Save the game if the user chooses "Yes"
  }
  router.push("/"); // Exit the game
};
</script>

<style scoped>
.div {
  border-left: solid black;
}

.child.title {
  flex: 20%;
  border-bottom: solid black;
}

.child.buttons {
  flex: 80%;
  display: grid;
}

.child.grid {
  flex: 1;
  display: grid;
}
</style>
