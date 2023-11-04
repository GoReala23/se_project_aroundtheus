// const previewClose = imagePreviewModal.querySelector(".modal__close");
// previewClose.addEventListener("click", () => {
//   closePopup(imagePreviewModal);
// });

// imageModal.addEventListener("click", () => {
//   openModal(imagePreviewModal);
// });

// cardImageEl.addEventListener("click", () => {
//   const previewImageEl = imagePreviewModal.querySelector(".modal__image");
//   const previewImageTitleEl =
//     imagePreviewModal.querySelector(".modal__img-title");
//   previewImageEl.src = cardData.link;
//   previewImageEl.alt = cardData.name;
//   previewImageTitleEl.textContent = cardData.name;
//   openModal(imagePreviewModal);
// });

// official card stuff

class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon);
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard);
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick(this._name, this._link)
      );
  }

  _handleImageClick() {
    this._cardElement
      .querySelector(".card__image")
      .classList.add(this._openPreview);
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    console.log("click");
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
    console.log("click");
  }

  _openPreview(modal) {
    modal.classList.add(".modal_opened");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    const cardImageElement = this._cardElement.querySelector(".card__image");
    cardImageElement.src = this._link;
    cardImageElement.alt = this._name;

    const cardTitleElement = this._cardElement.querySelector(".card__title");
    cardTitleElement.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;

    // set event listeners

    // return the card

    // this._element.querySelector(".card__image").style.backgroundImage = url(
    //   $(this._link)
    // );

    // this._cardElement.querySelector("card__title").textContent = this._name;
  }
}

export default Card;
