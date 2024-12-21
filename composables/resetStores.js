// composables/resetStores.js

export const resetStores = () => {
  const playerStore = usePlayerStore();
  const championStore = useChampionStore();
  const nameStore = useNameStore();
  const roundStore = useRoundStore();
  const savedGamesStore = useSavedGamesStore();

  playerStore.$reset();
  championStore.$reset();
  nameStore.$reset();
  roundStore.$reset();
  savedGamesStore.$reset();
  // Add resets for other stores here.
};
