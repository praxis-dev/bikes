import "./styles.scss";

let breakPoint = window.matchMedia("(max-width: 710px)");

// primaryTitleReposition

const primaryTitle = document.querySelector(".primary__title");
const primaryTextContainer = document.querySelector(".primary__text-container");
const primaryIllustrationContainer = document.querySelector(
  ".primary__illustration-container"
);

function mobileTitleReposition() {
  if (breakPoint.matches) {
    primaryTitle.after(primaryIllustrationContainer);
  } else {
    primaryTextContainer.after(primaryIllustrationContainer);
  }
}

mobileTitleReposition();

breakPoint.addEventListener("change", () => mobileTitleReposition());

// hideHighwayPicForMobile

const highwayIllustrations = document.querySelectorAll(".highway__image");

function hideHighwayPicForMobile() {
  if (breakPoint.matches) {
    highwayIllustrations[1].style.display = "none";
  } else {
    highwayIllustrations[1].style.display = "block";
  }
}

hideHighwayPicForMobile();

breakPoint.addEventListener("change", () => hideHighwayPicForMobile());

// repositionHighwaySelectorForMobile

const highwaySection = document.querySelector(".highway");
const highwayTitle = document.querySelector(".highway__title");
const highwayPicSelector = document.querySelector(
  ".highway__slider-buttons-container"
);
const mobileTitleAndSelectorWrapper = document.createElement("div");
const highwayMobileLine = document.querySelector(".highway__mobile-line");
const highwayArrowLeftContainer = document.querySelector(
  ".highway__slider-button-left"
);
const highwayArrowRightContainer = document.querySelector(
  ".highway__slider-button-right"
);

function repositionHighwaySelectorForMobile() {
  if (breakPoint.matches) {
    mobileTitleAndSelectorWrapper.classList.add(
      "highway__title-and-selector-wrapper"
    );
    highwayMobileLine.after(highwayTitle);
    highwayTitle.after(mobileTitleAndSelectorWrapper);
    mobileTitleAndSelectorWrapper.appendChild(highwayTitle);
    mobileTitleAndSelectorWrapper.appendChild(highwayPicSelector);
    mobileTitleAndSelectorWrapper.style.display = "flex";
    mobileTitleAndSelectorWrapper.style.flexDirection = "row";
    mobileTitleAndSelectorWrapper.style.justifyContent = "space-between";
    mobileTitleAndSelectorWrapper.style.alignItems = "center";
    mobileTitleAndSelectorWrapper.style.marginBottom = "5px";

    highwayArrowLeftContainer.style.width = "24px";
    highwayArrowLeftContainer.style.height = "24px";
    highwayArrowRightContainer.style.width = "24px";
    highwayArrowRightContainer.style.height = "24px";
  } else {
    highwayArrowLeftContainer.style.width = "50px";
    highwayArrowLeftContainer.style.height = "50px";
    highwayArrowRightContainer.style.width = "50px";
    highwayArrowRightContainer.style.height = "50px";

    highwaySection.prepend(highwayTitle);

    mobileTitleAndSelectorWrapper.remove();

    highwaySection.appendChild(highwayPicSelector);
  }
}

repositionHighwaySelectorForMobile();

breakPoint.addEventListener("change", () =>
  repositionHighwaySelectorForMobile()
);

//highwaySwapForMobile

const highwayImagesLeftContainer = document.querySelector(
  ".highway__images-container-left"
);
const highwayTextContainer = document.querySelector(".highway__text-container");

function highwaySwapForMobile() {
  if (breakPoint.matches) {
    highwayImagesLeftContainer.parentNode.insertBefore(
      highwayImagesLeftContainer,
      highwayTextContainer
    );
  } else {
    highwayTextContainer.parentNode.insertBefore(
      highwayTextContainer,
      highwayImagesLeftContainer
    );
  }
}
highwaySwapForMobile();

breakPoint.addEventListener("change", () => highwaySwapForMobile());

// hideBikesCardsForMobile;

const bikesCards = document.querySelectorAll(".bikes__card");

function hideBikesCardsForMobile() {
  if (breakPoint.matches) {
    bikesCards[1].style.display = "none";
    bikesCards[2].style.display = "none";
  } else {
    bikesCards[1].style.display = "block";
    bikesCards[2].style.display = "block";
  }
}
hideBikesCardsForMobile();

breakPoint.addEventListener("change", () => hideBikesCardsForMobile());
