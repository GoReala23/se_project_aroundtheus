import Popup from "./Popup";
import { PopupWithForm } from "./PopupWithForm";

export class ConfirmPopup extends PopupWithForm {
  constructor(popupSelector) {
    super({ popupSelector });

    this._yesButton = this._popupElement.querySelector(
      "#modal-confirm-yes-button"
    );
    this._buttonText = this._yesButton.textContent;
  }

  setSubmitAction(action) {
    this._handleSubmit = (event) => {
      event.preventDefault();
      action();
    };
  }

  showLoading(loadingText = "Loading...") {
    this._yesButton.textContent = loadingText;
  }

  hideLoading() {
    this._yesButton.textContent = this._buttonText;
  }

  open() {
    this._yesButton.addEventListener("click", this._handleSubmit);
    super.open();
  }

  close() {
    this._yesButton.removeEventListener("click", this._handleSubmit);

    super.close();
  }

  // _handleYesButtonClick = (event) => {
  //   event.preventDefault();
  //   this._handleSubmit();
  // };
}
