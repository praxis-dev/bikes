import { emailInputSubmit, emailInputString } from "./global";

export function sayCoolHideOk() {
  emailInputString.placeholder = "Круто!";
  emailInputString.value = "Круто!";
  emailInputSubmit.style.display = "none";
}
