class Card {
  constructor(
    { name, link, cardId, handleImageClick, handleLikeIcon, handleDeleteCard },
    cardSelector
  ) {
    this._name = name;
    this._link = link;
    this._cardId = cardId;
    this._handleImageClick = handleImageClick;
    this._handleLikeIcon = handleLikeIcon;
    this._handleDeleteCard = handleDeleteCard;

    this._cardElement = document

      .querySelector(cardSelector)

      .content.querySelector(".card")

      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = `Image of  ${this._name}`;

    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardTitle.textContent = this._name;
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
  }

  getView() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon(this._cardId);
    });

    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard(this._cardId)
    );

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });

    return this._cardElement;
  }

  remove() {
    this._cardElement.remove();
  }

  handleDeleteCard() {
    this._handleDeleteCard(this._cardId);
    console.log("delete called");
  }

  handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  isLiked() {
    return this._likeButton.classList.contains("card__like-button_active");
  }
}

export default Card;
