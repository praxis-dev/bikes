import "./styles.scss";

let breakPoint = window.matchMedia("(max-width: 710px)");
let breakPointForBikes = window.matchMedia("(max-width: 940px)");
let breakPointForBikeNamesInBikeSection = window.matchMedia(
  "(max-width: 1439px)"
);

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
const highwayRightPics = document.querySelectorAll(
  ".highway__images-container-right"
);

function hideHighwayPicForMobile() {
  if (breakPoint.matches) {
    highwayRightPics.forEach((container) => {
      container.style.display = "none";
    });
  } else {
    console.log("visible");
    highwayRightPics.forEach((container) => {
      container.style.display = "block";
    });
  }
}

breakPoint.addEventListener("change", () => hideHighwayPicForMobile());

const highwaySection = document.querySelector(".highway");
const highwaySections = document.querySelectorAll(".highway");
const highwaySlides = document.querySelectorAll(".highway__slide");
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

function restructureSlides(highwaySlides) {
  if (breakPoint.matches) {
    highwaySlides.forEach((slide) => {
      const highwayTitle = slide.querySelector(".highway__title");
      const highwayImagesLeftContainer = slide.querySelector(
        ".highway__images-container-left"
      );
      const highwayTextContainer = slide.querySelector(
        ".highway__text-container"
      );
      const highwayText = slide.querySelector(".highway__text");
      highwayText.parentNode.insertBefore(
        highwayImagesLeftContainer,
        highwayText
      );
    });
  } else {
    highwaySlides.forEach((slide) => {
      const highwayTitle = slide.querySelector(".highway__title");
      const highwayImagesLeftContainer = slide.querySelector(
        ".highway__images-container-left"
      );
      const highwayTextContainer = slide.querySelector(
        ".highway__text-container"
      );
      const highwayText = slide.querySelector(".highway__text");
      highwayTextContainer.after(highwayImagesLeftContainer);
    });
  }
}

restructureSlides(highwaySlides);

breakPoint.addEventListener("change", () => restructureSlides(highwaySlides));

const highwayImagesLeftContainer = document.querySelector(
  ".highway__images-container-left"
);
const highwayTextContainer = document.querySelector(".highway__text-container");

// reposition highway selector

function repositionHighwaySelectorForMobile() {
  if (breakPoint.matches) {
    highwayPicSelector.style.position = "absolute";
    highwayPicSelector.style.top = "17%";
    highwayPicSelector.style.right = "5%";
    highwayArrowLeftContainer.style.width = "24px";
    highwayArrowLeftContainer.style.height = "24px";
    highwayArrowRightContainer.style.width = "24px";
    highwayArrowRightContainer.style.height = "24px";
  } else {
    highwayArrowLeftContainer.style.width = "50px";
    highwayArrowLeftContainer.style.height = "50px";
    highwayArrowRightContainer.style.width = "50px";
    highwayArrowRightContainer.style.height = "50px";
    highwayPicSelector.style.position = "static";
    highwaySection.appendChild(highwayPicSelector);
  }
}

repositionHighwaySelectorForMobile();

breakPoint.addEventListener("change", () =>
  repositionHighwaySelectorForMobile()
);

// hideBikesCardsForMobile;

const bikesSlides = document.querySelectorAll(".bikes__slide");

function hideBikesCardsForMobile(bikesSlides) {
  bikesSlides.forEach((slide) => {
    if (breakPointForBikes.matches) {
      const bikesCards = slide.querySelectorAll(".bikes__card");
      bikesCards[1].style.display = "none";
      bikesCards[2].style.display = "none";
    } else {
      const bikesCards = slide.querySelectorAll(".bikes__card");
      bikesCards[1].style.display = "block";
      bikesCards[2].style.display = "block";
    }
  });
}
hideBikesCardsForMobile(bikesSlides);

breakPointForBikes.addEventListener("change", () =>
  hideBikesCardsForMobile(bikesSlides)
);

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
const highwaySmallArrowLeft = document.querySelector(
  ".highway__small-arrow-left"
);
const highwaySmallArrowRight = document.querySelector(
  ".highway__small-arrow-right"
);
const primaryBikePicContainer = document.querySelector(
  ".primary__bike-picture-container"
);
const primaryBike = document.querySelector(".primary__bike-picture");
const bikesImage = document.querySelectorAll(".bikes__image");
const highwayRectangle = document.querySelectorAll(".highway__rectangle");
const terrainType = document.querySelectorAll(".highway__terrain-type");
const sunIcon = document.querySelector(".toggle__sun-icon");
const moonIcon = document.querySelector(".toggle__moon-icon");
const primaryDetailsButton = document.querySelector(".primary__details-button");
const toggleFill = document.querySelector(".toggle__fill");
const bikesNames = document.querySelectorAll(".bikes__name");
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
  highwaySmallArrowLeft.style.backgroundColor = "";
  highwaySmallArrowRight.style.backgroundColor = "";
  primaryBike.style.backgroundColor = "";
  bikesImage.forEach(
    (element) => (element.style.backgroundColor = "rgba(244, 244, 244, 1)")
  );
  toggleBikeNamesBackground();
  highwayRectangle.forEach((element) => (element.style.backgroundColor = ""));
  terrainType.forEach((element) => (element.style.backgroundColor = ""));
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
    highwayRectangle.forEach((element) => (element.style.backgroundColor = ""));
    terrainType.forEach((element) => (element.style.backgroundColor = ""));
  }
  theme = "light";
}

applyLightTheme();

function toggleBikeNamesBackground() {
  if (breakPointForBikeNamesInBikeSection.matches) {
    bikesNames.forEach((element) => {
      console.log("match");
      element.style.backgroundColor = "rgba(244, 244, 244, 1)";
      element.style.color = "black";
    });
  } else {
    bikesNames.forEach((element) => {
      element.style.backgroundColor = "rgba(51, 51, 51, 1)";
      element.style.color = "white";
    });
  }
}

window.addEventListener("resize", () => {
  toggleBikeNamesBackground();
});

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
}

function scrollRight() {
  highwaySlidesContainer.scrollBy(200, 0);
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

//scrollBikes

const kebabLeft = document.querySelector(".three-dots-menu__dot_left");
const kebabMiddle = document.querySelector(".three-dots-menu__dot_middle");
const kebabRight = document.querySelector(".three-dots-menu__dot_right");

const linksToHighway = document.querySelectorAll(".bikes__types-link_highway");
const linksToGravel = document.querySelectorAll(".bikes__types-link_gravel");
const linksToTt = document.querySelectorAll(".bikes__types-link_tt");
const bikesHighway = document.getElementById("highway");
const bikesGravel = document.getElementById("gravel");
const bikesTt = document.getElementById("TT");

function scrollToHighway() {
  bikesHighway.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function scrollToGravel() {
  bikesGravel.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function scrollToTT() {
  bikesTt.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

linksToHighway.forEach(function (elem) {
  console.log("link to gravel triggered");
  kebabLeftActive();
  elem.addEventListener("click", function () {
    scrollToHighway();
  });
});

linksToGravel.forEach(function (elem) {
  elem.addEventListener("click", function () {
    kebabMiddleActive();
    console.log("link to gravel triggered");
    scrollToGravel();
  });
});

linksToTt.forEach(function (elem) {
  elem.addEventListener("click", function () {
    kebabRightActive();
    scrollToTT();
  });
});

// active kebab menu

function kebabLeftActive() {
  console.log("left active");
  kebabLeft.classList.add("three-dots-menu__dot_active");
  kebabMiddle.classList.remove("three-dots-menu__dot_active");
  kebabRight.classList.remove("three-dots-menu__dot_active");
}

function kebabMiddleActive() {
  console.log("middle active");
  kebabLeft.classList.remove("three-dots-menu__dot_active");
  kebabMiddle.classList.add("three-dots-menu__dot_active");
  kebabRight.classList.remove("three-dots-menu__dot_active");
}

function kebabRightActive() {
  console.log("right active");
  kebabLeft.classList.remove("three-dots-menu__dot_active");
  kebabMiddle.classList.remove("three-dots-menu__dot_active");
  kebabRight.classList.add("three-dots-menu__dot_active");
}

const highwayIntersection = document.getElementById(
  "intersectionTriggerHighway"
);
const gravelIntersection = document.getElementById("intersectionTriggerGravel");
const ttIntersection = document.getElementById("intersectionTriggerTT");

let observerHighway = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log("highway true");
      kebabLeftActive();
    }
  },
  { threshold: [1] }
);

let observerGravel = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log("gravel true");
      kebabMiddleActive();
    }
  },
  { threshold: [1] }
);

let observerTt = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log("tt true");
      kebabRightActive();
    }
  },
  { threshold: [1] }
);

observerHighway.observe(highwayIntersection);
observerGravel.observe(gravelIntersection);
observerTt.observe(ttIntersection);

const bikesMobileSelector = document.querySelectorAll(
  ".bikes__mobile-selector-wrapper"
);

bikesMobileSelector.forEach(function (elem) {
  elem.addEventListener(
    "change",
    function (event) {
      if (event.target.value === "highway") {
        kebabLeftActive();
        scrollToHighway();
      } else if (event.target.value === "Gravel") {
        kebabMiddleActive();
        scrollToGravel();
      } else if (event.target.value === "TT") {
        kebabRightActive();
        scrollToTT();
      }
    },
    false
  );
});
