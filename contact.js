function openPopup() {
    document.getElementById("popup-form").style.display = "block";
}
  
  function closePopup() {
    document.getElementById("popup-form").style.display = "none";
}
let applyButton = document.querySelector(".btn");

applyButton.addEventListener("click", openPopup);


let closeImage = document.querySelector(".popup-close");

closeImage.addEventListener("click", closePopup);

// mobile navigation menu

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const dropdownContent = document.querySelector(".dropdown-content");
  const closeButton = document.querySelector(".close-button");

  hamburgerMenu.addEventListener("click", function () {
      dropdownContent.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
      dropdownContent.style.display = "none";
  });
});
