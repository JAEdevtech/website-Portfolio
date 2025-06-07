const menuLink = document.querySelector(".linksContainer");
const burger = document.getElementById("burger");
function toggleMenu() {
  if (burger.checked == true) {
    menuLink.style.display = "block";
    console.log("checked");
  } else {
    menuLink.style.display = "none";
    console.log("unchecked");
  }
}
// theme
function themeToggle() {
  const addLightMode = document.body.classList.toggle("light-mode");
  const slider = document.querySelector(".slider");
  let sliderState = slider.checked == true;
  if (addLightMode) {
    sliderState;
  } else {
    console.log(addLightMode);
    console.log(sliderState);
  }
}
