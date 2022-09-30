import "./styles.scss";

let breakPoint = window.matchMedia("(max-width: 693px)");
const primarySection = document.querySelector(".primary");
const primaryTitle = document.querySelector(".primary__title");
const primaryTextContainer = document.querySelector(".primary__text-container");
const primaryIllustrationContainer = document.querySelector(
  ".primary__illustration-container"
);
const primaryText = document.querySelector(".primary__text");

function mobileTitleReposition() {
  if (breakPoint.matches) {
    console.log("reposition");
    primaryTitle.after(primaryIllustrationContainer);
  } else {
    primaryTextContainer.after(primaryIllustrationContainer);
  }
}

mobileTitleReposition();

breakPoint.addEventListener("change", () => mobileTitleReposition());
