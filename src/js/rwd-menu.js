function outerHeight(el) {
  let height = el.offsetHeight;
  let style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

const nav = document.querySelector(".page__nav");
const navHeight = outerHeight(nav);

const rwdMenu = () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const slideRightArrow = document.querySelector(".main-menu__item--slide-right-arrow");
  const mainMenu = document.querySelector(".main-menu");

  hamburgerBtn.addEventListener("click", function() {
    mainMenu.classList.toggle('visible');
    setToPPosMenu();
  }, false);

  slideRightArrow.addEventListener("click", function() {
    mainMenu.classList.remove("visible");
    mainMenu.style.right = `-${mainMenu.clientWidth}px`;
  }, false);

  // STICKY MENU
  document.addEventListener("scroll", function() {
      if (window.pageYOffset > navHeight) {
        mainMenu.style.top = `${0}px`;
      } else {
        mainMenu.style.top = `${navHeight}px`;
      }
  }, false);
}

const setToPPosMenu = () => {
  const nav = document.querySelector(".page__nav");
  const mainMenu = document.querySelector(".main-menu");
  const dropDownMenu = mainMenu.classList.contains('visible');
  
  if(dropDownMenu) {
    mainMenu.style.top = `${navHeight}px`;
    mainMenu.style.right = 0;
  } else {
    mainMenu.style.right = `-${mainMenu.clientWidth}px`;
  }
}

export default rwdMenu;