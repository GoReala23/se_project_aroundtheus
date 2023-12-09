import { saveButtons } from "../utils/constants.js";
import Popup from "./Popup.js";

import { UserInfo } from "./userInfo.js";

export class PopupWithForm extends Popup {
  constructor(
    { popupSelector, handleFormSubmit } // this is where you declas/setup methods
  ) {
    super({ popupSelector }); // { popupSelector: "#add-card-modal"}

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = document
      .querySelector(popupSelector)
      .querySelector(".modal__form");
    this._inputs = [...this._popupElement.querySelectorAll("input")];
    this._closeButton = document
      .querySelector(popupSelector)
      .querySelector(".modal__close");
  }

  close = () => {
    console.log(this._popupForm);
    this._popupForm.reset();
    super.close();
  };

  _getInputValue() {
    const inputValues = {};
    this._inputs.forEach((input) => (inputValues[input.name] = input.value));
    console.log(inputValues);
    return inputValues;
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", this.close);

    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValue());
      this.close();
    });
    super.setEventListeners();
  }
}

// index.js

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
