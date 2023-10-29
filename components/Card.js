const imageModal = document.querySelector(".modal__image");
const imagePreviewModal = document.querySelector("#modal-preview-img");
const previewClose = imagePreviewModal.querySelector(".modal__close");
previewClose.addEventListener("click", () => {
  closePopup(imagePreviewModal);
});

imageModal.addEventListener("click", () => {
  openModal(imagePreviewModal);
});

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

  _seteventListners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon);
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard);
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this.handleImageClick);
  }

  handleImageClick() {
    this._cardElement
      .querySelector(".card__image")
      .classList.toggle("#modal-preview-img");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _getTemplate() {
    cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
  }

  getView() {
    this._element = this._getTemplate;

    // set event listeners
    this._seteventListners();
    // return the card

    this._element.querySelector(".card__image").style.backgroundImage = url(
      $(this._link)
    );

    this._element.querySelector("card__title").textContent = this._name;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._seteventListners();

    this._element.querySelector(".card__image").style.backgroundImage = url(
      $(this._link)
    );

    this._element.querySelector("card__title").textContent = this._name;

    return this._element;
  }
}

export default Card;
