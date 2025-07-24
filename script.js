const hamburger = document.getElementById("hamburger");
const hamburgerIcon = hamburger.querySelector("i");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  document.body.classList.toggle("menu-open");

  // Toggle icon: bars ↔ times
  if (mobileMenu.classList.contains("show")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");

    // Pastikan ikon kembali ke bars
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");

    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});

// Tutup menu saat klik salah satu link dalam mobile-menu
const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  });
});