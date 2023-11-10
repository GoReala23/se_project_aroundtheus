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
    this._element = this.getView();

    this._cardImage = this._element.querySelector(".card__image");
    this._cardImageTitle = this._element.querySelector(".card__title");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeIcon());

    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard()
    );

    this._cardImage.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  _handleDeleteCard() {
    this._cardElement.remove();

    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document

      .querySelector(this._cardSelector)

      .content.querySelector(".card")

      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".card__image");

    this._cardImage.src = this._link;

    this._cardImage.alt = this._name;

    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardTitle.textContent = this._name;
    this.picPreview = this._cardImage.querySelector(".modal_opened");

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._setEventListeners();

    return this._cardElement;

    // set event listeners

    // return the card
  }
}

export default Card;
