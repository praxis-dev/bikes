import {
  breakPoint,
  primaryTitle,
  primaryIllustrationContainer,
  primaryTextContainer,
} from "./global";

export function mobileTitleReposition() {
  if (breakPoint.matches) {
    primaryTitle.after(primaryIllustrationContainer);
  } else {
    primaryTextContainer.after(primaryIllustrationContainer);
  }
}
