// ============== SHOW MENU ===================== //

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// ============== OPEN MENU ===================== //
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // navClose.classList.add("show-close");
  });
}
// ============== CLOSE MENU ===================== //
if (navClose) {
  navClose.addEventListener("click", linkAction);
}

// ============== REMOVE MENU MOBILE ===================== //

// console.log(navLink);

function linkAction() {
  // const navMenu = document.getElementById("nav-menu");
  // when we click on nav__link in mobile, we remove show-menu class, menu will hide
  // navClose.classList.toggle("show-close");
  navMenu.classList.remove("show-menu");
}
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ===================== CHANGE BACKGROUND HEADER ===================//
function scrollHeader() {
  const header = document.getElementById("header");
  // when scroll is greater then 50 viewport height

  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
// ==================== SCROLL UP ==================//
function scrollUp() {
  const scrollIcon = document.getElementById("scroll-up");
  if (window.scrollY > 400) {
    scrollIcon.classList.add("show-scrollup");
  } else {
    scrollIcon.classList.remove("show-scrollup");
  }
}
window.addEventListener("scroll", scrollUp);
// ======================= SCROLL SECTIONS ACTIVE LINK ===================//
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    // console.log(sectionHeight, sectionTop, sectionId);
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
// =========================== SCROLL REVEAL =====================//
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  // delay: 400,
  reset: true,
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content `, {
  origin: "top",
  interval: 200,
});
sr.reveal(`.footer__copy`, { origin: "bottom", delay: 200 });
sr.reveal(`.products__img`, {
  origin: "bottom",
  delay: 1800,
  interval: 250,
  distance: "100px",
});
sr.reveal(`.specs__data, .discount__animate`, {
  origin: "left",
  delay: 400,
  interval: 150,
});
sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
sr.reveal(`.case__img`, { origin: "top" });
sr.reveal(`.case__data`);
// ===========BUTTON HOVER EFFECT ===============//
const btn = document.querySelector(".button");
