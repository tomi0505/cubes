import './scss/style.scss';
import siemaSlider from './js/siema-slider';

document.addEventListener('DOMContentLoaded', function() {
  const sliderPrevSlideBtn = document.querySelector('.slider__prev-slide-btn');
  const sliderNextSlideBtn = document.querySelector('.slider__next-slide-btn');

  sliderPrevSlideBtn.addEventListener("click", () => siemaSlider.prev());
  sliderNextSlideBtn.addEventListener("click", () => siemaSlider.next());
}, false);