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
    // this._saveButtons = saveButtons;
  }

  close() {
    super.close();
  }

  _getInputValue(title, job) {
    const inputInfos = this._popupForm.querySelectorAll(".modal__input");

    inputInfos.name = title;
    inputInfos.job = job;
    return title, job;
  }

  _handleFormSubmit() {
    let title = document.getElementById("#modal-input-title");
    let job = document.getElementById("#modal-input-description");
    return title, job;
  }

  setEventListeners() {
    // this._saveButtons.forEach((button) => {
    //   button.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     this._handleFormSubmit(this._getInputValue());
    //     this.close();
    //   });
    // });

    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let title = this._popupForm.querySelector(
        "#modal-profile-title-input"
      ).value;
      let job = this._popupForm.querySelector(
        "#modal-profile-description-input"
      ).value;

      this._handleFormSubmit(this._getInputValue(title, job));
      this.close();
    });

    super.setEventListeners();
  }
}

// index.js

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
