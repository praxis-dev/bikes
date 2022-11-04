import {
  breakPoint,
  trainingTextContainer,
  trainingImageContainer,
  trainingTitle,
} from "./global";

export function trainingMobileReposition() {
  if (breakPoint.matches) {
    trainingTitle.after(trainingImageContainer);
  } else {
    trainingTextContainer.after(trainingImageContainer);
  }
}
