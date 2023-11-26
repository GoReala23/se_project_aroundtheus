import {
  modalCloseButtons,
  profileTitle,
  profileDescription,
  saveButtons,
} from "../utils/constants.js";
import Popup from "./Popup.js";

import { UserInfo } from "./userInfo.js";

export class PopupWithForm extends Popup {
  constructor(
    { popupSelector, handleFormSubmit } // this is where you declas/setup methods
  ) {
    super({ popupSelector }); // { popupSelector: "#add-card-modal"}

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = document.querySelector(".modal__form");
    this._saveButtons = saveButtons;
  }

  open() {
    super.open();
  }

  close() {
    // this._popupForm.reset();
    super.close();
  }

  _getInputValue() {
    const inputInfos = this._popupForm.querySelectorAll(".modal__input");

    inputInfos.forEach((input) => {
      return input;
    });
  }

  setEventListeners() {
    this._saveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this._getInputValue();
      });
    });
    super.setEventListeners();
  }
}

// index.js

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
