const resmenu = document.querySelector(".res-menu");
const menuitm = document.querySelector(".menu-itm");
const links = document.querySelector(".menu-itm li");

resmenu.addEventListener("click", () => {
  menuitm.classList.toggle("open");
});
