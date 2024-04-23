var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
var checkAllTrigger = document.querySelector(".select-all");
var checkboxes = document.querySelectorAll(".radio-placeholder");
console.log(checkAllTrigger, checkboxes);
var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};
checkAllTrigger.addEventListener("click", checkAll);
var sections = document.querySelectorAll(".times");
sections.forEach((times) => {
  //[on mettra ici le code à effectuer pour chaque section//]
});
sections.forEach((times) => {
  var checkAllTrigger = times.querySelector(".check-all");
  var checkboxes = times.querySelectorAll(".checkbox");
  var checkAll = function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };

  checkAllTrigger.addEventListener("click", checkAll);
});
var verbs = ["aimer", "faire", "voyager", "réféchir", "boire"];
var textfield = document.querySelector(".textfield");
var suggestions = document.querySelector(".suggestions");
var autocomplete = function () {
  console.log("test");
  var items = verbs.filter((value) => value.includes(textfield.value));
  suggestions.innerHTML = items.join(", ");
};
textfield.addEventListener("keyup", autocomplete);
