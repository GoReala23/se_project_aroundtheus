import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector(".modal__image");
    this._popupTitle = this._popupElement.querySelector(".modal__img-title");
  }

  open = (name, link) => {
    this._popupImage.src = link;
    this._popupTitle.textContent = name;
    this._popupImage.alt = name;

    super.open();
  };
}
