export function getGlobalFontFamily() {
  const rootStyle = getComputedStyle(document.documentElement);
  return rootStyle.getPropertyValue("--font-family").trim();
}
