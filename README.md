[17:49, 15/10/2022] Павел Путилин: so the idea is :
He is using const highwaySection = document.querySelector(".highway");

And should use const highwaySections = document.querySelectorAll(".highway"); instead.

=> THEN => 

He is using breakPoint.addEventListener("change", () =>
  repositionHighwaySelectorForMobile()
); and should use breakPoints.forEach(breakPoint=>{breakPoint.addEventListener("change", () =>
  repositionHighwaySelectorForMobile()
);}) instead

[17:49, 15/10/2022] Павел Путилин: and of course, inside the 'repositionHighwaySelectorForMobile he should change 'global' variable to a specific ones inside each section (e.g instead of document.querySelector, he should use SECTION_ELEMENT.querySelector)

(this way it will search for elements that are located within the section he is at right now)