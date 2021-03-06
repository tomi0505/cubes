import './scss/style.scss';
import siemaSlider from './js/siema-slider';
import rwdMenu from "./js/rwd-menu";
import newCub from "./js/cub-card-multiple";
import chooseCubs from "./js/choose-cubs";
import saveFavouriteCup from "./js/save-favourite-cup";
import showPopUp from "./js/show-pop-up";
import scrollToTop from "./js/scroll-to-top";
import scrollTo from "./js/smooth-scroll";

const cubCardData = {
  title: ["BLACK AND WHITE CRAZY STRIPES CUP", "GREEN SQUARE RUSH CUP"],
  image: ["cup1.png", "cup2.png"],
  saleStatus: ["SALE", "NEW"]
};

document.addEventListener('DOMContentLoaded', function() {
  siemaSlider();
  scrollTo();
  showPopUp();
  scrollToTop();
  rwdMenu();

  // CREATE YOUR NEW CUP
  for (let i = 0; i < 3; i++) {
    newCub(cubCardData.title[0], cubCardData.image[0], cubCardData.saleStatus[0]);
    newCub(cubCardData.title[1], cubCardData.image[1], cubCardData.saleStatus[1]);
    newCub(cubCardData.title[1], cubCardData.image[0], "FREE");
  }

  chooseCubs();
  saveFavouriteCup();
}, false);