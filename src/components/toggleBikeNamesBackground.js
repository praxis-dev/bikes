import {
  breakPointForBikeNamesInBikeSection,
  bikesNames,
} from "../components/global";

export function toggleBikeNamesBackground() {
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
