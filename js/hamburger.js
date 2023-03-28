/*/menu hamburguesa/;*/

let menu = document
  .getElementById("hamburger")
  .addEventListener("click", animateMenu);
document.querySelectorAll("menu__item--show").forEach((x) => {
  x.addEventListener();
});
/*con el evento click se asigna la funcion para alternar la clase que activa la animacion del menu hamburguesa*/
function animateMenu() {
  document.getElementById("hamburger").classList.toggle("active__bars-menu");
  let shows = document.querySelectorAll(".nav-show");
  shows.forEach((show) => {
    show.classList.toggle("active-container-menu");
  });
}
