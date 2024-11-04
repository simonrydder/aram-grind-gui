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
  fontSize -= 1;
  element.style.fontSize = `${fontSize}px`;
};
