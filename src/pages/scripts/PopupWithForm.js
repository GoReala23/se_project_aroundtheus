import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    handleFormSubmit // this is where you declas/setup methods
  ) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

// index.js

const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
newCardPopup.open();

newCardPopup.close();
