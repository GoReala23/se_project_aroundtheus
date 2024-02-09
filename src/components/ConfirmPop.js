import Popup from "./Popup";

export class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });

    this._yesButton = this._popupElement.querySelector(
      "#modal-confirm-yes-button"
    );
  }

  setSubmitAction(action) {
    this._handleSubmit = (event) => {
      event.preventDefault();
      action();
    };
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
