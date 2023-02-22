AOS.init();
let darkBtn = document.getElementById("dark-mode-btn");
darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  sticky()
})

var swiper = new Swiper(".swiper-1", {
  spaceBetween: 30,
  breakpoints: {
    10: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".swiper-2", {
  effect: "coverflow",
  grabCursor: true,
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 70,
  loop: true,
  breakpoints: {
    10: {
      slidesPerView: 1.15,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

});

window.onscroll = function () {
  sticky()
};
function sticky() {
  if (window.scrollY > 1) {
    document.getElementById('header').style.backdropFilter = "blur(2.5px)"
    if (document.body.classList.contains("dark")) {
      document.getElementById('header').style.background = "#111827E0";
      document.getElementById('header').style.borderBottom = "1px solid #374151";

    }
    else {
      document.getElementById('header').style.background = "rgba(255,255,255,0.8)";
      document.getElementById('header').style.borderBottom = "1px solid rgb(210 210 210)";

    }
  }
  else {
    document.getElementById('header').style.background = "none"

    document.getElementById('header').style.backdropFilter = "none"
    document.getElementById('header').style.borderBottom = "none";
  }
}

document.querySelector(".menu-close-btn").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("flex");
})
document.querySelector(".mobile-menu-btn ").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  document.querySelector(".mobile-menu").classList.toggle("flex");

})


window.addEventListener("scroll", () => {
  let val = window.scrollY;
  document.querySelector(".paralex-element-1").style.left = val * .10 + "px";
  document.querySelector(".paralex-element-2").style.right = val * .10 + "px";
  document.querySelector(".paralex-element-3").style.left = val * .10 + "px";
})