import "./styles/styles.css";

const $menuIcon = document.getElementById("menu-icon");
const $navbar = document.getElementById("navbar");

$menuIcon.addEventListener("click", () => {
  $navbar.classList.toggle("hidden");
});
