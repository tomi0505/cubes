const chooseCubs = () => {
  let chooseCubsBtn = document.querySelectorAll(".cub-card__choose-cups-btn");
  chooseCubsBtn = [...chooseCubsBtn];

  chooseCubsBtn.forEach(chooseCubsBtnItem => {
    chooseCubsBtnItem.addEventListener("click", function() {
      const shoppingCart = document.querySelector("#shopping-cart");
      shoppingCart.dataset.shoppingCartCounter++;
      shoppingCart.classList.add("shopping-cart");
    }, false);
  });
}

export default chooseCubs;