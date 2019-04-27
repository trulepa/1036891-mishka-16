
function init(event) {
  var $toggle = document.getElementById("main-nav__toggle");
  $toggle.addEventListener("click", handleButtonClick);

 /* var $next = document.getElementById("reviews__next");
  var $prev = document.getElementById("reviews__prev");
  $next.addEventListener("click", slider);
  $prev.addEventListener("click", slider); */
}

function handleButtonClick(event) {
  var $show = document.getElementById("site-list");
  this.classList.toggle("main-nav__toggle--active");
  $show.classList.toggle("site-list--show");
}

window.addEventListener("load", init);
