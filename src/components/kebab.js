import { kebabLeft, kebabMiddle, kebabRight } from "./global";

export function kebabLeftActive() {
  console.log("left active");
  kebabLeft.classList.add("three-dots-menu__dot_active");
  kebabMiddle.classList.remove("three-dots-menu__dot_active");
  kebabRight.classList.remove("three-dots-menu__dot_active");
}

export function kebabMiddleActive() {
  console.log("middle active");
  kebabLeft.classList.remove("three-dots-menu__dot_active");
  kebabMiddle.classList.add("three-dots-menu__dot_active");
  kebabRight.classList.remove("three-dots-menu__dot_active");
}

export function kebabRightActive() {
  console.log("right active");
  kebabLeft.classList.remove("three-dots-menu__dot_active");
  kebabMiddle.classList.remove("three-dots-menu__dot_active");
  kebabRight.classList.add("three-dots-menu__dot_active");
}
