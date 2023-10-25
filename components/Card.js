export default class Card {
  constructor({ name, link }) {
    console.log({ name, link }, cardSelector);
    this._name = name;
    this._link = link;
    this._cardSelector = this.cardSelector;
  }

  _seteventListners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    const deleteButton = document
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
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

  getView() {
    this._cardElement = document
      .querySelector("._this.cardSelector")
      .textContent.querySelector(".card")
      .cloneNode(true);
    //get the card view
    // set event listeners
    this._seteventListners();
    // return the card
  }
}
