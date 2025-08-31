let actionBtn = document.getElementById("nav-menu");
let optionAction = document.getElementById("options-action");
let closeMenu = document.getElementById("close-menu");

actionBtn.addEventListener("click", () => {
  optionAction.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  optionAction.style.display = "none";
});
