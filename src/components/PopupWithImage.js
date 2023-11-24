import { card } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this.photo = document.querySelector(".card__image");
  }
  open(handleImageClick) {
    super.open();
    return data.link, data.alt;
  }
}

open();
