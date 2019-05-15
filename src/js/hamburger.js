function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

const hamburger = () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");

  hamburgerBtn.addEventListener("click", function() {
    const mainMenu = document.querySelector(".main-menu");
    mainMenu.classList.toggle('visible');
    setToPPosMenu();
  }, false);
}

const setToPPosMenu = () => {
  const nav = document.querySelector(".page__nav");
  const mainMenu = document.querySelector(".main-menu");

  const dropDownMenu = mainMenu.classList.contains('visible');
  
  if(dropDownMenu) {
    mainMenu.style.top = `${outerHeight(nav)}px`;
  }
}

export default hamburger;