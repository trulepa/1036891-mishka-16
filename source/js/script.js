
function init(event) {
  var $toggle = document.getElementById("main-nav__toggle");
  $toggle.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  var $show = document.getElementById("site-list");
  this.classList.toggle("main-nav__toggle--active");
  $show.classList.toggle("site-list--show");
}

window.addEventListener("load", init);
