import './scss/style.scss';
import siemaSlider from './js/siema-slider';
import hamburger from "./js/hamburger";
import newCub from "./js/cub-card-multiple";

const cubCardData = {
  title: ["BLACK AND WHITE CRAZY STRIPES CUP", "GREEN SQUARE RUSH CUP"],
  image: ["cup1.png", "cup2.png"],
  saleStatus: ["SALE", "NEW"]
};

document.addEventListener('DOMContentLoaded', function() {
  siemaSlider();
  hamburger();

  // CREATE YOUR NEW CUP!! :-)
  newCub(
    cubCardData.title[0],
    cubCardData.image[0],
    cubCardData.saleStatus[0]
  );
  newCub(
    cubCardData.title[1],
    cubCardData.image[1],
    cubCardData.saleStatus[1]
  );
  newCub(
    cubCardData.title[1],
    cubCardData.image[0],
    "FREE"
  );
}, false);