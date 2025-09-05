

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    navMenu.classList.toggle("leftZero");

    if (navMenu.classList.contains("leftZero")) {
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      document.body.style.overflow = ""; // reset to default
    }
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      navMenu.classList.remove("leftZero");
      document.body.style.overflow = "";
    });
  });
});
