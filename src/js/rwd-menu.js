const rwd = window.matchMedia("(max-width: 1220px)");
const nav = document.querySelector(".page__nav");
const navHeight = outerHeight(nav);

function outerHeight(el) {
  let height = el.offsetHeight;
  let style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

const stickyMenu = () => {
  const mainMenu = document.querySelector(".main-menu");

  if (window.pageYOffset > navHeight) {
    mainMenu.style.top = `${0}px`;
  } else {
    mainMenu.style.top = `${navHeight}px`;
  }
}

const setStickyRwd = rwd => {
  if(rwd.matches) {
    document.addEventListener("scroll", stickyMenu, false);
  } else {
    document.removeEventListener("scroll", stickyMenu);
  }
}

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
  setStickyRwd(rwd);
  rwd.addListener(rwd => {
    setStickyRwd(rwd);
  });
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