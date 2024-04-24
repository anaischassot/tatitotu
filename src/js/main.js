var burger = document.querySelector(".menu-burger");
var menu = document.querySelector(".menu");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);

var checkAllTrigger = document.querySelector(".card-times-text-select");
var checkboxes = document.querySelectorAll(".checkbox");
var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};
checkAllTrigger.addEventListener("click", checkAll);

var uncheckAllTrigger = document.querySelector(".card-times-text-uncheck");
var uncheckAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};
uncheckAllTrigger.addEventListener("click", uncheckAll);

var verbs = ["aimer", "faire", "voyager", "réféchir", "boire"];
var textfield = document.querySelector(".textfield");
var suggestions = document.querySelector(".card-verb-suggestions");
var autocomplete = function () {
  console.log("test");
  var items = verbs.filter((value) => value.includes(textfield.value));
  suggestions.innerHTML = items.join(", ");
};
textfield.addEventListener("keyup", autocomplete);

var options = document.querySelector(".card-options-print input");
var hiddenOptions = document.querySelector(".card-options-hidden");
var toggleOptions = function toggleOptions() {
  hiddenOptions.classList.toggle("is-active");
};
options.addEventListener("change", toggleOptions);
