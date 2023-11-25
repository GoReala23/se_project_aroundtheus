import { card } from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }
  open() {
    super.open();
  }
}

const imagePopup = new PopupWithImage(".modal__image");
imagePopup.open();
