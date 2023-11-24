import { card } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(handleImageClick) {
    super({ handleImageClick });
    this.photo = document.querySelector(".card__image");
  }
  open(data) {
    super.open();
    return data.link, data.alt;
  }
}

open();
