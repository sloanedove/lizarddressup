window.onload = () => {
  let avatarlizard;
  
  let homescenediv = document.getElementById("homescene");
  let homebutton = document.getElementById("home");
  let hs;
  homebutton.addEventListener("click", () => {
    homescenediv.style.display = "block";
    hs=homescene();
    avatarlizard=hs.avatarlizard;
  });
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
    let ps=petscene(avatarlizard);
    avatarlizard=ps.avatarlizard;
  });

  let nailscenediv = document.getElementById("nailscene");
  let nailinstructiondiv = document.getElementById("nailinstructions");
  let nailbutton = document.getElementById("nailsalon");
  nailbutton.addEventListener("click", () => {
    nailscenediv.style.display = "block";
    nailinstructiondiv.style.display = "block";
    nailscene();
  });
  document.getElementById("nail-start-btn").addEventListener("click", () => {
    nailinstructiondiv.style.display="none";
  }) 

  let phonebutton = document.getElementById("phone");
  let phonescenediv = document.getElementById("phonescene");
  let phonesc;
  phonebutton.addEventListener("click", () => {
    phonescenediv.style.display = "block";
    phonesc=phonescene(avatarlizard);
    console.log(avatarlizard);
  });
  //these are all scene closing buttons
  
  let phonebuttonclose = document.getElementById("phone-close-btn");
  phonebuttonclose.addEventListener("click", () => {
    phonescenediv.style.display = "none";
    // console.log(phonesc.response);
  });

  let mallbuttonclose = document.getElementById("mall-close-btn");
  mallbuttonclose.addEventListener("click", () => {
    mallscenediv.style.display = "none";
    petscenediv.style.display = "none";
  });

  let homebuttonclose = document.getElementById("home-close-btn");
    homebuttonclose.addEventListener("click", () => {
      avatarlizard=hs.avatarlizard;
      console.log(avatarlizard);
    })

};
