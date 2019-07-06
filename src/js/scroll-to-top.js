const scrollToTop = () => {
  window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    if(pageYOffset >= 2300) {
      scrollToTopBtn.classList.add('scroll-to-top-btn--visible');
    } else {
      scrollToTopBtn.classList.remove('scroll-to-top-btn--visible');
    }
  }, false);
}

export default scrollToTop;