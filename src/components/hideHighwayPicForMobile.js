import { breakPoint, highwayRightPics } from "./global";

export function hideHighwayPicForMobile() {
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
