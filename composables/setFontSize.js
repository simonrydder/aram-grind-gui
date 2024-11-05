export const setFontSize = (elementValue, factor) => {
  if (elementValue) {
    const height = elementValue.clientHeight;
    elementValue.style.fontSize = `${height * factor}px`;
  }
};
