// document vars
let step1WU = document.querySelector(".home-HIWWUS1");
let step2WU = document.querySelector(".home-HIWWUS2");
let step3WU = document.querySelector(".home-HIWWUS3");
let step4WU = document.querySelector(".home-HIWWUS4");
let step1Img = document.querySelector(".home-HIWImg1");
let step2Img = document.querySelector(".home-HIWImg2");
let step3Img = document.querySelector(".home-HIWImg3");
let step4Img = document.querySelector(".home-HIWImg4");

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

//How it Works Scroller
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

step1WU.addEventListener("click", HIW1);
step2WU.addEventListener("click", HIW2);
step3WU.addEventListener("click", HIW3);
step4WU.addEventListener("click", HIW4);
