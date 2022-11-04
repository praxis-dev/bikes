import "./styles.scss";

import {
  breakPoint,
  breakPointForBikes,
  highwaySlides,
  bikesSlides,
  toggleMobile,
  allElements,
  highwayArrowLeftContainer,
  highwayArrowRightContainer,
  highwayArrowLeft,
  highwayArrowRight,
  highwaySmallArrowLeft,
  highwaySmallArrowRight,
  primaryBike,
  bikesImage,
  highwayRectangle,
  terrainType,
  sunIcon,
  moonIcon,
  toggleFill,
  primaryDetailsButton,
  headerMenuButton,
  popupCloseButton,
  emailInputString,
  emailInputSubmit,
  leftArrows,
  rightArrows,
  linksToHighway,
  linksToGravel,
  linksToTt,
  highwayIntersection,
  gravelIntersection,
  ttIntersection,
  bikesMobileSelector,
} from "../components/global";

import { mobileTitleReposition } from "../components/primaryTitleReposition";
import { hideHighwayPicForMobile } from "../components/hideHighwayPicForMobile";
import { restructureSlides } from "../components/restructureSlides";
import { repositionHighwaySelectorForMobile } from "../components/repositionHighwaySelectorForMobile";
import { hideBikesCardsForMobile } from "../components/hideBikeCardsForMobile";
import { trainingMobileReposition } from "../components/trainingMobileReposition";
import { toggleBikeNamesBackground } from "../components/toggleBikeNamesBackground";
import { popupOpener } from "../components/popupOpener";
import { popupClosure } from "../components/popupClosure";
import { makeOkVisible } from "../components/makeOkVisible";
import { sayCoolHideOk } from "../components/sayCoolHideOk";
import { scrollRight, scrollLeft } from "../components/scrollTerrainTypes";
import {
  scrollToHighway,
  scrollToGravel,
  scrollToTT,
} from "../components/scrollBikes";
import {
  kebabLeftActive,
  kebabMiddleActive,
  kebabRightActive,
} from "../components/kebab";

// primary Title Reposition

mobileTitleReposition();

breakPoint.addEventListener("change", () => mobileTitleReposition());

// hideHighwayPicForMobile

breakPoint.addEventListener("change", () => hideHighwayPicForMobile());

// restructure Slides For Mobile

restructureSlides(highwaySlides);

breakPoint.addEventListener("change", () => restructureSlides(highwaySlides));

// reposition highway selector for mobile

repositionHighwaySelectorForMobile();

breakPoint.addEventListener("change", () =>
  repositionHighwaySelectorForMobile()
);

// hide Bikes Cards For Mobile;

hideBikesCardsForMobile(bikesSlides);

breakPointForBikes.addEventListener("change", () =>
  hideBikesCardsForMobile(bikesSlides)
);

//trainingMobileReposition

trainingMobileReposition();

breakPoint.addEventListener("change", () => trainingMobileReposition());

//themeSwitcher

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

// window.addEventListener("resize", () => {
//   toggleBikeNamesBackground();
// });

toggle.addEventListener("change", function () {
  theme === "light" ? applyDarkTheme() : applyLightTheme();
});

toggleMobile.addEventListener("change", function () {
  theme === "light" ? applyDarkTheme() : applyLightTheme();
});

//popupOpener

headerMenuButton.addEventListener("click", function handleClick() {
  popupOpener();
});

//popupClosure

popupCloseButton.addEventListener("click", function handleClick() {
  popupClosure();
});

//showOkOnsubmit

emailInputString.addEventListener("click", function handleClick() {
  makeOkVisible();
});

//sayCoolWhenSubmitted

emailInputSubmit.addEventListener("click", function handleClick() {
  sayCoolHideOk();
});

//scrollTerrainTypes

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
