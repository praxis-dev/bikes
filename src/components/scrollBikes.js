import { bikesHighway, bikesGravel, bikesTt } from "../components/global";

export function scrollToHighway() {
  bikesHighway.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

export function scrollToGravel() {
  bikesGravel.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

export function scrollToTT() {
  bikesTt.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
