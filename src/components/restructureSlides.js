import { breakPoint } from "./global";

export function restructureSlides(highwaySlides) {
  if (breakPoint.matches) {
    highwaySlides.forEach((slide) => {
      const highwayImagesLeftContainer = slide.querySelector(
        ".highway__images-container-left"
      );
      const highwayText = slide.querySelector(".highway__text");
      highwayText.parentNode.insertBefore(
        highwayImagesLeftContainer,
        highwayText
      );
    });
  } else {
    highwaySlides.forEach((slide) => {
      const highwayImagesLeftContainer = slide.querySelector(
        ".highway__images-container-left"
      );
      const highwayTextContainer = slide.querySelector(
        ".highway__text-container"
      );
      highwayTextContainer.after(highwayImagesLeftContainer);
    });
  }
}
