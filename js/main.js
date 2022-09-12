const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

const accordion = document.querySelectorAll(".accordion");
accordion.forEach((item) => {
  item.addEventListener("click", function() {
    this.classList.toggle("accordion__expanded");
  });
});

// SHOW & HIDE BTN SCROLL TO TOP 
window.onscroll = function () { isScrollTop() }
function isScrollTop() {
  const btnScrollTop = document.querySelector('.scroll-top')
  if (document.documentElement.scrollTop > 2000) {
    btnScrollTop.style.display = 'flex';
  } else {
    btnScrollTop.style.display = 'none';
  }
}
