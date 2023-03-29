window.onload = () => {
  let phonebutton = document.getElementById("phone");
  let phonescenediv = document.getElementById("phonescene");
  phonebutton.addEventListener("click", () => {
    phonescenediv.style.display = "block";
    phonescene();
  });
  let homescenediv = document.getElementById("homescene");
  let homebutton = document.getElementById("home");
  homebutton.addEventListener("click", () => {
    homescenediv.style.display = "block";
    homescene();
  });
  //these are all scene closing buttons
  let homebuttonclose = document.getElementById("home-close-btn");
  homebuttonclose.addEventListener("click", () => {
    homescenediv.style.display = "none";
  });
  let phonebuttonclose = document.getElementById("phone-close-btn");
  phonebuttonclose.addEventListener("click", () => {
    phonescenediv.style.display = "none";
  });
};
