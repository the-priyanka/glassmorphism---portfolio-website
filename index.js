// ------------------- Toggle Navbar ------------------------
const navToggle = document.querySelector(".nav-toggle");

const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document
    .querySelector("section.active")
    .classList.toggle("fade-out");
}
function toggleNavbar() {
  header.classList.toggle("active");
}

// ------------------- Active Section ------------------------
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("link-item") &&
    e.target.hash !== ""
  ) {
    // activate the overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active")
    navToggle.classList.add("hide")
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggle.classList.remove("hide")
      document.querySelector(".overlay").classList.remove("active")
    }, 500);
  }
});

// ------------------- About Tabs ------------------------
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");
const portfolioPopup = document.querySelector(".portfolio-popup");
const ppClose = document.querySelector(".pp-close");
const main = document.querySelector(".main");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// -----------------Portfolio Item Details-------------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  portfolioPopup.classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  main.classList.toggle("fade-out");
}

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

ppClose.addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolio) {
  document.querySelector(".pp-thumbnail img").src =
    portfolio.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolio.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML =
    portfolio.querySelector(".portfolio-item-details").innerHTML;
}
