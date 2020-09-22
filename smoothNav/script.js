const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  hamburger.classList.toggle("openn");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

navlinks.addEventListener("click", () => {
  hamburger.classList.remove("openn");
  navlinks.classList.remove("open");
});
