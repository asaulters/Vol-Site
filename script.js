// document vars
let step1WU = document.querySelector(".home-HIWWUS1");
let step2WU = document.querySelector(".home-HIWWUS2");
let step3WU = document.querySelector(".home-HIWWUS3");
let step4WU = document.querySelector(".home-HIWWUS4");
let step1Img = document.querySelector(".home-HIWImg1");
let step2Img = document.querySelector(".home-HIWImg2");
let step3Img = document.querySelector(".home-HIWImg3");
let step4Img = document.querySelector(".home-HIWImg4");
let step1WUDev = document.querySelector(".home-HIWWUS1Dev");
let step2WUDev = document.querySelector(".home-HIWWUS2Dev");
let step3WUDev = document.querySelector(".home-HIWWUS3Dev");
let step4WUDev = document.querySelector(".home-HIWWUS4Dev");
let step1ImgDev = document.querySelector(".home-HIWImg1Dev");
let step2ImgDev = document.querySelector(".home-HIWImg2Dev");
let step3ImgDev = document.querySelector(".home-HIWImg3Dev");
let step4ImgDev = document.querySelector(".home-HIWImg4Dev");
let orgContainer = document.querySelector(".home-mainOrgContainer");
let devContainer = document.querySelector(".home-DevContainer");
let whoQ1 = document.querySelector(".home-topQBtn1");
let whoQ2 = document.querySelector(".home-topQBtn2");
let mapDiv = document.getElementById("contact-map");

//Nav
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        // console.log(index /7);
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

// //contact map
// // Initialize and add the map
// function initMap() {
//   // // The location of bristol
//   // const bristol = { lat: 36.594, lng: -82.188 };
//   // // The map, centered at bristol
//   // const map = new google.maps.Map({
//   //   zoom: 4,
//   //   center: bristol,
//   // });
//   // console.log(map);
//   // // The marker, positioned at bristol
//   // const marker = new google.maps.Marker({
//   //   position: bristol,
//   //   map: map,
//   // });
//   const loader = new Loader({
//     apiKey: "AIzaSyAB3V5sceiO6mdbWq91d2twQ40emyThH4Y",
//     version: "weekly",
//     ...additionalOptions,
//   });

//   loader.load().then(() => {
//     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });
// }
// initMap();
// Dev/Org
function containerChoose() {
  whoQ1.addEventListener("click", () => {
    orgContainer.style.display = "block";
    devContainer.style.display = "none";
  });
  whoQ2.addEventListener("click", () => {
    devContainer.style.display = "block";
    orgContainer.style.display = "none";
  });
}
containerChoose();

//How it Works Scroller Org
function HIW1() {
  //display none current img
  step2Img.style.display = "none";
  step3Img.style.display = "none";
  step4Img.style.display = "none";
  //change HIW img to this step
  step1Img.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step1WU.classList.toggle("on");
  step2WU.classList.remove("on");
  step3WU.classList.remove("on");
  step4WU.classList.remove("on");
}
function HIW2() {
  //display none current img
  step1Img.style.display = "none";
  step3Img.style.display = "none";
  step4Img.style.display = "none";
  //change HIW img to this step
  step2Img.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step2WU.classList.toggle("on");
  step1WU.classList.remove("on");
  step3WU.classList.remove("on");
  step4WU.classList.remove("on");
}
function HIW3() {
  //display none current img
  step1Img.style.display = "none";
  step2Img.style.display = "none";
  step4Img.style.display = "none";
  //change HIW img to this step
  step3Img.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step3WU.classList.toggle("on");
  step2WU.classList.remove("on");
  step1WU.classList.remove("on");
  step4WU.classList.remove("on");
}
function HIW4() {
  //display none current img
  step1Img.style.display = "none";
  step2Img.style.display = "none";
  step3Img.style.display = "none";
  //change HIW img to this step
  step4Img.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step4WU.classList.toggle("on");
  step2WU.classList.remove("on");
  step3WU.classList.remove("on");
  step1WU.classList.remove("on");
}
function HIW1Dev() {
  //display none current img
  step2ImgDev.style.display = "none";
  step3ImgDev.style.display = "none";
  step4ImgDev.style.display = "none";
  //change HIW img to this step
  step1ImgDev.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step1WUDev.classList.toggle("on");
  step2WUDev.classList.remove("on");
  step3WUDev.classList.remove("on");
  step4WUDev.classList.remove("on");
}
function HIW2Dev() {
  //display none current img
  step1ImgDev.style.display = "none";
  step3ImgDev.style.display = "none";
  step4ImgDev.style.display = "none";
  //change HIW img to this step
  step2ImgDev.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step2WUDev.classList.toggle("on");
  step1WUDev.classList.remove("on");
  step3WUDev.classList.remove("on");
  step4WUDev.classList.remove("on");
}
function HIW3Dev() {
  //display none current img
  step1ImgDev.style.display = "none";
  step2ImgDev.style.display = "none";
  step4ImgDev.style.display = "none";
  //change HIW img to this step
  step3ImgDev.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step3WUDev.classList.toggle("on");
  step2WUDev.classList.remove("on");
  step1WUDev.classList.remove("on");
  step4WUDev.classList.remove("on");
}
function HIW4Dev() {
  //display none current img
  step1ImgDev.style.display = "none";
  step2ImgDev.style.display = "none";
  step3ImgDev.style.display = "none";
  //change HIW img to this step
  step4ImgDev.style.display = "block";
  //onclick toggle competed and highlight left border on clicked
  step4WUDev.classList.toggle("on");
  step2WUDev.classList.remove("on");
  step3WUDev.classList.remove("on");
  step1WUDev.classList.remove("on");
}

step1WU.addEventListener("click", HIW1);
step2WU.addEventListener("click", HIW2);
step3WU.addEventListener("click", HIW3);
step4WU.addEventListener("click", HIW4);
step1WUDev.addEventListener("click", HIW1Dev);
step2WUDev.addEventListener("click", HIW2Dev);
step3WUDev.addEventListener("click", HIW3Dev);
step4WUDev.addEventListener("click", HIW4Dev);
