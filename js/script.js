// Nav active selon la section visible
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".site-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// Fade-in au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".card, .diplomas li")
  .forEach((el) => observer.observe(el));
