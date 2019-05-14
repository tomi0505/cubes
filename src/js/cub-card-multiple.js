"use strict";

const cubCardTemplate = `
  <h5 class="product-status-alert product-status-alert--{{saleBgColorClass}}">{{saleStatus}}</h5>
  <figure class="cub-card__image-item-container">
    <img src="src/img/{{image}}" class="cub-card__image-item" alt="cup">
    <figcaption class="cub-card__title-card-container">
      <h3 class="cub-card__title">{{title}}</h3>
    </figcaption>
  </figure>
  <div class="cub-card__price-info-container">
    <h6 class="cub-card__old-price-container">
      &pound;<span class="span cub-card__old-price">80.87</span>
    </h6>
    <div class="cub-card__current-price-container">
      from: 
      <h4 class="cub-card__current-price-header">
        &pound;<span class="span cub-card__current-price">67.00</span>
      </h4>
      / box
    </div>
    <p class="cub-card__vat">price exc. VAT</p>
  </div>
  <div class="cub-card__shop-action-btns-container">
    <button class="btn-h cub-card__choose-cups-btn">CHOOSE CUPS</button>
    <div class="cub-card__saving-activity-btns-container">
      <button class="btn-h cub-card__favourite-cups-btn">FAVOURITE</button>
      <button class="btn-h cub-card__compare-cups-btn">COMPARE</button>
    </div>
  </div>
`;

const newCub = (setTitle, setImage, setSaleStatus) => {
  const replaceTitle = cubCardTemplate.replace("{{title}}", setTitle);
  const replaceImage = replaceTitle.replace("{{image}}", setImage);
  const replacesetSaleStatus = replaceImage.replace(
    "{{saleStatus}}",
    setSaleStatus
  );

  let setSaleBgColorClass;

  if(setSaleStatus === "SALE") {
    setSaleBgColorClass = "sale-bg-color";
  } else if(setSaleStatus === "NEW") {
    setSaleBgColorClass = "new-bg-color";
  } else {
    setSaleBgColorClass = "undefined-color";
  }

  const replaceSaleBgColorClass = replacesetSaleStatus.replace(
    "{{saleBgColorClass}}",
    setSaleBgColorClass
  );

  addCubCardItemToDOM(replaceSaleBgColorClass);
};

const addCubCardItemToDOM = (cubCardTemplateFull) => {
  const cubCardsContainer = document.querySelector(".cub-cards-container");
  const cubCard = document.createElement("section");
  cubCard.classList.add("cub-card");
  cubCard.innerHTML = cubCardTemplateFull;
  cubCardsContainer.appendChild(cubCard);
};

export default newCub;