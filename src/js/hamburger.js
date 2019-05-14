const hamburger = () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");

  hamburgerBtn.addEventListener("click", function() {
    const mainMenu = document.querySelector(".main-menu");
    mainMenu.classList.toggle('visible');
    calcNavHeight();
  }, false);
}

const calcNavHeight = () => {
  const nav = document.querySelector(".page__nav");
  const getComputedNav = window.getComputedStyle(nav);
  console.log(getComputedNav.getPropertyValue('height'));
}

export default hamburger;