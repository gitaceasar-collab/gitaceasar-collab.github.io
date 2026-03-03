// DARK MODE
document.getElementById("darkToggle").onclick = function() {
  document.body.classList.toggle("dark");
};

// TYPING EFFECT
const text = "Gita Ceasar";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// REVEAL ON SCROLL
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// SLIDER
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

document.querySelector(".next").onclick = () => showSlide(slideIndex + 1);
document.querySelector(".prev").onclick = () => showSlide(slideIndex - 1);

// Auto Slide
setInterval(() => {
  showSlide(slideIndex + 1);
}, 4000);
