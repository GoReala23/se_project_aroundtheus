import { card } from "../utils/constants";
import Popup from "./Popup";

export class PopupWithImage extends Popup {
  open(cardData) {
    super.open();
    const name = (cardData.alt = cardData.link = cardData.link);
    cardData.src = link;

    return cardData;
  }
}
