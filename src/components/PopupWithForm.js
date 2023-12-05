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
  }

  _close() {
    const popupForm = this._inputs.values;
    popupForm.value = "";
    super.close();
    return popupForm;
  }

  _getInputValue() {
    const inputValues = {};
    this._inputs.forEach((input) => (inputValues[input.name] = input.value));
    console.log(inputValues);
    return inputValues;
  }

  setEventListeners(inputValues) {
    // this._saveButtons.forEach((button) => {
    //   button.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     this._handleFormSubmit(this._getInputValue());
    //     this.close();
    //   });
    // });

    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValue(inputValues));
      this._close();
    });
    super.setEventListeners();
  }
}

// index.js

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
