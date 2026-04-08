export function scrollMainToSection(id, behavior = "smooth") {
  const element = document.getElementById(id);
  const mainWrapper = document.querySelector(".main-scroll-wrapper");
  if (!element || !mainWrapper) return;
  const top =
    element.getBoundingClientRect().top -
    mainWrapper.getBoundingClientRect().top +
    mainWrapper.scrollTop;
  mainWrapper.scrollTo({ top, behavior });
}
