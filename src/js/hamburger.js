const hamburger = () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");

  hamburgerBtn.addEventListener("click", function() {
    const mainMenu = document.querySelector(".main-menu");
    mainMenu.classList.toggle('visible');
  }, false);
}

export default hamburger;