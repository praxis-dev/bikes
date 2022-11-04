import {
  breakPoint,
  highwayArrowLeftContainer,
  highwayArrowRightContainer,
  highwayPicSelector,
  highwaySection,
} from "./global";

export function repositionHighwaySelectorForMobile() {
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
