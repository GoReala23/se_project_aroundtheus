import { saveButtons } from "../utils/constants.js";
import Popup from "./Popup.js";

import { UserInfo } from "./userInfo.js";

export class PopupWithForm extends Popup {
  constructor(
    { popupSelector, handleFormSubmit } // this is where you declas/setup methods
  ) {
    super({ popupSelector }); // { popupSelector: "#add-card-modal"}

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._saveButtons = saveButtons;
  }

  close() {
    super.close();
  }

  _getInputValue() {
    const inputInfos = this._popupForm.querySelectorAll(".modal__input");
    const info = {};

    inputInfos.forEach((input) => {
      info[input.name] = input.value;

      return info;
    });
  }

  setEventListeners() {
    this._saveButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        this._handleFormSubmit(this._getInputValue());
        this.close();
      });
    });

    Popup.setEventListeners;
  }
}

// index.js

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
