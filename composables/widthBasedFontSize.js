export const widthBasedFontSize = (width, text) => {
  let minFontSize = 1;
  let maxFontSize = 200; // Arbitrary maximum font size to prevent infinite loops
  let fontSize = minFontSize;
  let textWidth = 0;

  while (minFontSize <= maxFontSize) {
    fontSize = Math.floor((minFontSize + maxFontSize) / 2); // Binary search
    textWidth = getTextWidth(fontSize, text);

    if (textWidth < width) {
      minFontSize = fontSize + 1;
    } else {
      maxFontSize = fontSize - 1;
    }
  }

  return maxFontSize; // Closest font size that fits
};

function getTextWidth(fontSize, text) {
  const fontFamily = getGlobalFontFamily();
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `${fontSize}px ${fontFamily}`;
  return context.measureText(text).width;
}
