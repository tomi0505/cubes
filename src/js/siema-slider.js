import Siema from "siema";

const configSiema = new Siema({
  perPage: {
    768: 3,
    1024: 5
  },
  loop: true
});

const siemaSlider = () => {
  const sliderPrevSlideBtn = document.querySelector('.slider__prev-slide-btn');
  const sliderNextSlideBtn = document.querySelector('.slider__next-slide-btn');

  sliderPrevSlideBtn.addEventListener("click", () => configSiema.prev());
  sliderNextSlideBtn.addEventListener("click", () => configSiema.next());
}

export default siemaSlider;