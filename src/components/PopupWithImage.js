import { card } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._photoElement = this._popupElement.querySelector(".modal__image");
    this._title = this._popupElement.querySelector(".modal__img-title");
  }

  open(link, alt, title) {
    this._photoElement.src = link;
    this._photoElement.alt = alt;
    this._title.textContent = title;
    super.open();
  }
}
