// composables/adjustFontSize.js
export const adjustFontSize = (element) => {
  if (!element) return;

  const parentWidth = element.clientWidth;
  const parentHeight = element.clientHeight;
  let fontSize = 10; // Start with a small font size
  element.style.fontSize = `${fontSize}px`;

  // Increase font size until it overflows the container
  while (
    element.scrollWidth <= parentWidth &&
    element.scrollHeight <= parentHeight
  ) {
    fontSize += 1;
    element.style.fontSize = `${fontSize}px`;
  }

  // Reduce font size by one step to prevent overflow
  fontSize -= 2;
  element.style.fontSize = `${fontSize}px`;

  return fontSize;
};

// composables/adjustFontSize.js
export const heightBasedFontSize = (element, factor) => {
  if (!element) return;

  const parentHeight = element.clientHeight * factor;
  let fontSize = 10;
  element.style.fontSize = `${fontSize}px`;

  while (element.scrollHeight <= parentHeight) {
    fontSize += 1;
    element.style.fontSize = `${fontSize}px`;
  }

  fontSize -= 2;
  element.style.fontSize = `${fontSize}px`;

  return fontSize;
};
