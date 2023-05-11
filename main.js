window.onload = () => {
  document.getElementById("welcome-close-btn").addEventListener("click", () => {
    document.getElementById("welcome").classList.add("hidden");
  })
  document.getElementById("start-over-btn").addEventListener("click", () => {
    window.location.reload();
  })
  document.getElementById("home-popup").addEventListener("click", () => {
    document.getElementById("home-popup").classList.add("hidden");
  })
  document.getElementById("mall-popup").addEventListener("click", () => {
    document.getElementById("mall-popup").classList.add("hidden");
  })
  document.getElementById("phone-popup").addEventListener("click", () => {
    document.getElementById("phone-popup").classList.add("hidden");
  })
  let avatarlizard;
  let homescenediv = document.getElementById("homescene");
  let homebutton = document.getElementById("home");
  let hs;
  let mallscenediv = document.getElementById("mallscene");
  let mallbutton = document.getElementById("mall");
  homebutton.addEventListener("click", () => {
    homescenediv.style.display = "block";
    hs=homescene();
    avatarlizard=hs.avatarlizard;
    mallbutton.classList.remove("hidden");
    document.getElementById("mallblocked").classList.add("hidden");
    homebutton.classList.remove("notification");
  });
    mallbutton.addEventListener("click", () => {
    mallscenediv.style.display = "block";
    document.getElementById("phone").classList.remove("hidden");
    document.getElementById("phoneblocked").classList.add("hidden");
    mallbutton.classList.remove("notification");
    // mallscene();
  });
  let petscenediv = document.getElementById("petscene");
  let petbutton = document.getElementById("petstore");
  let ps;
  petbutton.addEventListener("click", () => {
    petscenediv.style.display = "block";
    ps=petscene(avatarlizard);
  });
  document.getElementById("scorpgame").addEventListener("mousedown", ()=> {
    arcadescenediv.style.display = "block";
    arcadescene();
  });
  let arcadescenediv = document.getElementById("arcadescene");
  let arcadebutton = document.getElementById("arcadestore");
  arcadebutton.addEventListener("mousedown", () => {
    document.getElementById("posterscene").style.display="block";
  });
  let nailscenediv = document.getElementById("nailscene");
  let nailinstructiondiv = document.getElementById("nailinstructions");
  let nailbutton = document.getElementById("nailsalon");
  let ns;
  nailbutton.addEventListener("click", () => {
    nailscenediv.style.display = "block";
    nailinstructiondiv.style.display = "block";
    // if(ps.avatarlizard){
    //   avatarlizard=ps.avatarlizard;
    // }
    ns=nailscene(avatarlizard);
    
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
    phonebutton.classList.add("notification");
    document.getElementById("phone-popup").classList.remove("hidden");
  });
  document.getElementById("poster-close-btn").addEventListener("click", () =>{
    document.getElementById("posterscene").style.display="none";
  })

  let homebuttonclose = document.getElementById("home-close-btn");
    homebuttonclose.addEventListener("click", () => {
      avatarlizard=hs.avatarlizard;
    })

    
};
