import "./styles.scss";

let breakPoint = window.matchMedia("(max-width: 710px)");
let breakPointForBikes = window.matchMedia("(max-width: 940px)");

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
  if (breakPointForBikes.matches) {
    bikesCards[1].style.display = "none";
    bikesCards[2].style.display = "none";
  } else {
    bikesCards[1].style.display = "block";
    bikesCards[2].style.display = "block";
  }
}
hideBikesCardsForMobile();

breakPointForBikes.addEventListener("change", () => hideBikesCardsForMobile());

//trainingMobileReposition

const trainingTitle = document.querySelector(".training__title");
const trainingImageContainer = document.querySelector(
  ".training__image-container"
);
const trainingTextContainer = document.querySelector(
  ".training__text-container"
);

function trainingMobileReposition() {
  if (breakPoint.matches) {
    trainingTitle.after(trainingImageContainer);
  } else {
    trainingTextContainer.after(trainingImageContainer);
  }
}

trainingMobileReposition();

breakPoint.addEventListener("change", () => trainingMobileReposition());

//themeSwitcher

const toggle = document.querySelector(".toggle");
const toggleMobile = document.querySelector(".toggle-mobile");
const allElements = document.getElementsByTagName("*");
const highwayArrowLeft = document.querySelector(".highway__arrow-left");
const highwayArrowRight = document.querySelector(".highway__arrow-right");
const primaryBikePicContainer = document.querySelector(
  ".primary__bike-picture-container"
);
const bikesImage = document.querySelectorAll(".bikes__image");
const highwayRectangle = document.querySelector(".highway__rectangle");
const terrainType = document.querySelector(".highway__terrain-type");
const sunIcon = document.querySelector(".toggle__sun-icon");
const moonIcon = document.querySelector(".toggle__moon-icon");
const primaryDetailsButton = document.querySelector(".primary__details-button");
const toggleFill = document.querySelector(".toggle__fill");
let theme = "light";

function applyDarkTheme() {
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.backgroundColor = "rgba(51, 51, 51, 1)";
    allElements[i].style.color = "rgba(255, 255, 255, 1)";
  }
  highwayArrowLeftContainer.style.backgroundColor = "rgba(67, 67, 67, 1)";
  highwayArrowLeft.style.backgroundColor = "rgba(67, 67, 67, 1)";
  highwayArrowRightContainer.style.backgroundColor = "rgba(67, 67, 67, 1)";
  highwayArrowRight.style.backgroundColor = "rgba(67, 67, 67, 1)";
  primaryBikePicContainer.style.backgroundColor = "rgba(244, 244, 244, 1)";
  bikesImage.forEach(
    (element) => (element.style.backgroundColor = "rgba(244, 244, 244, 1)")
  );
  highwayRectangle.style.backgroundColor = "";
  terrainType.style.backgroundColor = "";
  sunIcon.style.color = "rgba(67, 67, 67, 1)";
  moonIcon.style.color = "rgba(67, 67, 67, 1)";
  toggleFill.style.backgroundColor = "rgba(84, 84, 84, 1)";
  primaryDetailsButton.style.backgroundColor = "rgba(36, 180, 126, 1)";

  theme = "dark";
}

applyDarkTheme();

function applyLightTheme() {
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.backgroundColor = "rgba(244, 244, 244, 1)";
    allElements[i].style.color = "rgba(21, 21, 21, 1)";
    primaryDetailsButton.style.backgroundColor = "rgba(36, 180, 126, 1)";
    primaryDetailsButton.style.color = "#FFFFFF";
    highwayRectangle.style.backgroundColor = "";
    terrainType.style.backgroundColor = "";
  }
  theme = "light";
}

applyLightTheme();

toggle.addEventListener("change", function () {
  theme === "light" ? applyDarkTheme() : applyLightTheme();
});

toggleMobile.addEventListener("change", function () {
  theme === "light" ? applyDarkTheme() : applyLightTheme();
});

//popupOpener

const popup = document.querySelector(".popup");
const headerMenuButton = document.querySelector(".header__menu-icon");

function popupOpener() {
  popup.style.display = "block";
}

headerMenuButton.addEventListener("click", function handleClick() {
  popupOpener();
});

//popupClosure

const popupCloseButton = document.querySelector(".popup__close-button");

function popupClosure() {
  popup.style.display = "none";
}

popupCloseButton.addEventListener("click", function handleClick() {
  popupClosure();
});

//showOkOnsubmit

const emailInputString = document.querySelector(
  ".subscribe__email-input-string"
);
const emailInputSubmit = document.querySelector(
  ".subscribe__email-input-submit"
);

function makeOkVisible() {
  emailInputSubmit.style.display = "block";
}

emailInputString.addEventListener("click", function handleClick() {
  makeOkVisible();
});

//sayCoolWhenSubmitted

function sayCoolHideOk() {
  emailInputString.placeholder = "Круто!";
  emailInputString.value = "Круто!";
  emailInputSubmit.style.display = "none";
}

emailInputSubmit.addEventListener("click", function handleClick() {
  sayCoolHideOk();
});

//scrollTerrainTypes

const leftArrows = document.querySelectorAll(".highway__slider-button-left");
const rightArrows = document.querySelectorAll(".highway__slider-button-right");
const highwaySlidesContainer = document.querySelector(
  ".highway__slides-container"
);

function scrollLeft() {
  highwaySlidesContainer.scrollBy(-200, 0);
  console.log("leftClicked");
}

function scrollRight() {
  highwaySlidesContainer.scrollBy(200, 0);
  console.log("rightClicked");
}

leftArrows.forEach(function (elem) {
  elem.addEventListener("click", function () {
    scrollLeft();
  });
});

rightArrows.forEach(function (elem) {
  elem.addEventListener("click", function () {
    scrollRight();
  });
});
