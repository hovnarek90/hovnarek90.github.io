let searchBtn = document.querySelector("#search-btn");
let loginBtn = document.querySelector("#login-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginForm = document.querySelector(".login-form-container");
let form_close = document.querySelector("#form-close");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-bar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  loginForm.classList.remove("active");
  searchBar.classList.remove("active");
  searchBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
};

//  ondblclick
window.onclick = (e) => {
  // console.log("EVENT", e.target);
  if (e.target.classList.contains("login-form-container")) {
    loginForm.classList.remove("active");
  }
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});
form_close.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".home .controls .vid-btn.active")
      .classList.remove("active");
    btn.classList.add("active");

    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
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

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

