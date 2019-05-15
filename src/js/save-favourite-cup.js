const saveFavouriteCup = () => {
  let favouriteCup = document.querySelectorAll(".cub-card__favourite-cups-btn");
  favouriteCup = [...favouriteCup];

  favouriteCup.forEach(favouriteCupItem => {
    favouriteCupItem.addEventListener("click", function() {
      const favourite = document.querySelector("#favourite");
      favourite.dataset.favouriteCounter++;
      favourite.classList.add("favourite");
    }, false);
  });
}

export default saveFavouriteCup;