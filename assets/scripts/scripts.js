AOS.init();
let darkBtn = document.getElementById("dark-mode-btn");
darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  sticky()
})

$('.carousel-1').owlCarousel({
  center: true,
  loop: true,
  responsive: {

    10: {
      items: 3,
      margin: 24,

    }
    , 768: {
      items: 5,
      margin: 24,

    },
    1024: {
      items: 7,
      margin: 30,

    },
    1650: {
      items: 8,
      margin: 30,


    }
  }
});
$('.carousel-2').owlCarousel({
  center: true,
  loop: true,
  responsive: {

    10: {
      items: 1.3,
      margin: 24,

    }
    , 768: {
      items: 2,
      margin: 24,

    },
    1024: {
      items: 3.75,
      margin: 30,

    },
    1650: {
      items: 5.5,
      margin: 30,


    },
    2650: {
      items: 7.5,
      margin: 30,


    }
  }
});



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
    document.querySelector(".paralex-element-1").style.left = val * .10 + "px";
    document.querySelector(".paralex-element-2").style.right = val * .10 + "px";
    document.querySelector(".paralex-element-3").style.left = val * .10 + "px";
  }

  let workSec = document.getElementById("work");
  let servicesSec = document.getElementById("services");
  let pricingSec = document.getElementById("pricing");
  let heroLi = document.querySelector(".nav-link a.hero");
  let workLi = document.querySelector(".nav-link a.work");
  let servicesLi = document.querySelector(".nav-link a.services");
  let pricingLi = document.querySelector(".nav-link a.pricing");
  if (window.scrollY > workSec.offsetTop - 200) {
    workLi.classList.add("font-bold");
    workLi.classList.remove("font-medium");
    heroLi.classList.remove("font-bold");
    servicesLi.classList.remove("font-bold");
    pricingLi.classList.remove("font-bold");
    if (window.scrollY > servicesSec.offsetTop - 200) {
      servicesLi.classList.add("font-bold");
      servicesLi.classList.remove("font-medium");
      heroLi.classList.remove("font-bold");
      workLi.classList.remove("font-bold");
      pricingLi.classList.remove("font-bold");
      if (window.scrollY > pricingSec.offsetTop - 200) {
        pricingLi.classList.add("font-bold");
        pricingLi.classList.remove("font-medium");
        heroLi.classList.remove("font-bold");
        workLi.classList.remove("font-bold");
        servicesLi.classList.remove("font-bold");
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


// $(".carousel-2 .owl-stage").append('<svg class="svg-mask absolute bottom-[-47px] left-0 dark:fill-darkclr fill-[#FFFAF4] z-10 " width="100%" height="75" viewBox="0 0 1600 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 75H1601V30.5C1601 30.5 1167.74 0.5 798.5 0.5C453.081 0.5 0 30.5 0 30.5V75Z" /></svg>')
// $(".carousel-2 .owl-stage").append('<svg class="svg-mask absolute top-[-58px] left-0 dark:fill-darkclr fill-[#FFFAF4] z-10 " width="100%"height="85" viewBox="0 0 1600 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1600 0.0001297L7.43092e-06 -1.01767e-05L2.6382e-06 54.8224C2.6382e-06 54.8224 434.03 84.9999 801.993 84.9999C1146.22 85 1600 54.8225 1600 54.8225L1600 0.0001297Z" />/svg>')
// $(".svg-mask").css("width","100% !important")