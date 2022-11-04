import { breakPointForBikes } from "./global";

export function hideBikesCardsForMobile(bikesSlides) {
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
