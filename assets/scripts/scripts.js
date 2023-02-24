AOS.init();
let darkBtn = document.getElementById("dark-mode-btn");
darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  sticky()
})

// $('.carousel-1').owlCarousel({
//   center: true,
//   loop: true,
//   responsive: {

//     10: {
//       items: 3,
//       margin: 24,

//     }
//     , 768: {
//       items: 5,
//       margin: 24,

//     },
//     1024: {
//       items: 7,
//       margin: 30,

//     },
//     1650: {
//       items: 8,
//       margin: 30,


//     }
//   }
// });
// $('.carousel-2').owlCarousel({
//   center: true,
//   loop: true,
//   responsive: {

//     10: {
//       items: 1.3,
//       margin: 24,

//     }
//     , 768: {
//       items: 2,
//       margin: 24,

//     },
//     1024: {
//       items: 3.75,
//       margin: 30,

//     },
//     1650: {
//       items: 5.5,
//       margin: 30,


//     },
//     2650: {
//       items: 7.5,
//       margin: 30,


//     }
//   }
// });



function sticky() {
  if (window.scrollY > 1) {
    document.getElementById('header').style.backdropFilter = "blur(2.5px)";
    document.querySelector('.header-container ').classList.remove("py-10");
    document.querySelector('.header-container ').classList.add("py-6");


    if (document.body.classList.contains("dark")) {
      document.getElementById('header').style.background = "#111827E0";

    }
    else {
      document.getElementById('header').style.background = "rgba(255,255,255,0.8)";
      document.querySelector('.header-container ').classList.remove("py-10");

    }
  }
  else {
    document.getElementById('header').style.background = "none"
    document.querySelector('.header-container ').classList.add("py-10");
    document.querySelector('.header-container ').classList.remove("py-6");
    document.getElementById('header').style.backdropFilter = "none"
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
  sticky();
  if (window.screen.width > 768) {
    let val = window.scrollY;
    document.querySelector(".paralex-element-1").style.left = val * .05 + "px";
    document.querySelector(".paralex-element-2").style.right = val * .05 + "px";
    document.querySelector(".paralex-element-3").style.left = val * .05 + "px";
  }

  let workSec = document.getElementById("work");
  let servicesSec = document.getElementById("services");
  let pricingSec = document.getElementById("pricing");
  let heroLi = document.querySelector(".nav-link a.hero");
  let workLi = document.querySelector(".nav-link a.work");
  let servicesLi = document.querySelector(".nav-link a.services");
  let pricingLi = document.querySelector(".nav-link a.pricing");
  if (window.scrollY > workSec.offsetTop - 200) {
    workLi.classList.add("font-bold", "dark:text-white", "text-[#111827]");
    workLi.classList.remove("font-medium");
    heroLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
    heroLi.classList.add("text-[#6B7280]", "dark:text-[#9CA3AF]");
    servicesLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
    pricingLi.classList.remove("font-bold");
    if (window.scrollY > servicesSec.offsetTop - 200) {
      servicesLi.classList.add("font-bold", "dark:text-white", "text-[#111827]");
      servicesLi.classList.remove("font-medium");
      heroLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
      heroLi.classList.add("text-[#6B7280]", "dark:text-[#9CA3AF]");
      workLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
      pricingLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
      if (window.scrollY > pricingSec.offsetTop - 200) {
        pricingLi.classList.add("font-bold", "dark:text-white", "text-[#111827]");
        pricingLi.classList.remove("font-medium");
        heroLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
        heroLi.classList.add("text-[#6B7280]", "dark:text-[#9CA3AF]");
        workLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
        servicesLi.classList.remove("font-bold", "dark:text-white", "text-[#111827]");
      }
    }
  }
  else {
    heroLi.classList.add("font-bold");
    workLi.classList.remove("font-bold");
    servicesLi.classList.remove("font-bold");
    pricingLi.classList.remove("font-bold");
  }
});




















$(".carousel-1 ").flickity({
  autoPlay: true,
  cellAlign: "center",
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
  imagesLoaded: true,
  setGallerySize: true,
});
let $carousel = $(".carousel-2 ").flickity({
  autoPlay: true,
  cellAlign: "center",
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
  imagesLoaded: true,
  setGallerySize: true,
});
$(".carousel-2 .carousel-cell.is-selected").css("border", "1px solid #8859FA");
$carousel.on('change.flickity', () => {
  $(".carousel-2 .carousel-cell.is-selected").css({ "border-radius": "16px", "border": "1px solid #8859FA", "box-shadow": "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)" });
  $(".carousel-2 .carousel-cell:not(.is-selected").css({ "border-radius": "0px", "border": "none", "box-shadow": "none" });
});

// carousel-cell w-[400px] h-[400px] px-[15px] is-selected"border: 1px solid #8859FA;
// box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);