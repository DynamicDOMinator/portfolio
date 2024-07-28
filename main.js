const myBox = document.querySelector(".text");
const container = document.querySelector(".animation-header");
const lines = document.querySelector(".lines-container");
const elements = document.querySelector(".display");
const myContent = document.querySelector(".my-content");
const img = document.querySelector(".img");


document.addEventListener("DOMContentLoaded", () => { 
  setTimeout(() => {
    myBox.classList.add("animate__hinge");
  }, 1500);
  setTimeout(() => {
    lines.classList.add("animate__shakeY");
  }, 1400);
  setTimeout(() => {
    container.classList.add("animate__fadeOutUp");
  }, 3700);
  setTimeout(() => {
    elements.style.opacity = "0.5";
  }, 3700);
  setTimeout(() => {
    elements.style.opacity = "1";
  }, 3900);
  setTimeout(() => {
    myContent.classList.add("animate__slideInLeft");
  }, 3900);
  setTimeout(() => {
    img.classList.add("animate__slideInRight");
  }, 3900);
});

const mySkillText = document.querySelector(".skills");

const skills = [
  "Web Developer",
  "Frontend",
  "Web Designer",
  "Testing",
  "Debugging",
  "SEO",
];

const typingDelay = 100;
const erasingDelay = 100;
const newLetterDelay = 1000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (skills.length) {
    setTimeout(type, newLetterDelay);
  }
});
type = () => {
  if (charIndex < skills[index].length) {
    mySkillText.textContent += skills[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
};

erase = () => {
  if (charIndex > 0) {
    mySkillText.textContent = skills[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= skills.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
};

const buttonSmall = document.querySelector(".my-btn");
buttonSmall.addEventListener("click", () => {
  const currentSrc = buttonSmall.getAttribute("src");

  if (currentSrc.includes("./imges/icons8-menu-48 (1).png")) {
    buttonSmall.setAttribute("src", "./imges/close icone.png");
  } else {
    buttonSmall.setAttribute("src", "./imges/icons8-menu-48 (1).png");
  }
});


/*here is my slider */

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Keep autoplay running after interactions
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

 const swiperContainer = document.querySelector(".swiper");
 swiperContainer.addEventListener("mouseenter", () => {
   swiper.autoplay.stop();
 });
 swiperContainer.addEventListener("mouseleave", () => {
   swiper.autoplay.start();
 });

const mailButton = document.querySelector(".btn");
const textArea = document.querySelector("textarea");

mailButton.addEventListener("click", (event) => {
  if (textArea.value.trim() === "") {
    alert("Please type your message");
    event.preventDefault(); // Prevent form submission if the textarea is empty
  }
});
