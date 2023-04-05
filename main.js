window.onload = () => {
  let avatarlizard;
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
    homescene(avatarlizard);
  });
  console.log(avatarlizard);
  let mallscenediv = document.getElementById("mallscene");
  let mallbutton = document.getElementById("mall");
  mallbutton.addEventListener("click", () => {
    mallscenediv.style.display = "block";
    // mallscene();
  });
  let petscenediv = document.getElementById("petscene");
  let petbutton = document.getElementById("petstore");
  petbutton.addEventListener("click", () => {
    petscenediv.style.display = "block";
    petscene(avatarlizard);
  });

  //these are all scene closing buttons
  
  let phonebuttonclose = document.getElementById("phone-close-btn");
  phonebuttonclose.addEventListener("click", () => {
    phonescenediv.style.display = "none";
  });

  let mallbuttonclose = document.getElementById("mall-close-btn");
  mallbuttonclose.addEventListener("click", () => {
    mallscenediv.style.display = "none";
    petscenediv.style.display = "none";
  });
};
