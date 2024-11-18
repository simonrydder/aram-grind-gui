export const dynamicFontSize = (text, width, height) => {
  const widthBased = widthBasedFontSize(width, text);
  const heightBased = heightBasedFontSize(height);
  return Math.min(widthBased, heightBased);
};
