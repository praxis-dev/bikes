import { highwaySlidesContainer } from "./global";

export function scrollLeft() {
  highwaySlidesContainer.scrollBy(-200, 0);
}

export function scrollRight() {
  highwaySlidesContainer.scrollBy(200, 0);
}
