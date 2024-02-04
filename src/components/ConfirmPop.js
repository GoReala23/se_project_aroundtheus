import Popup from "./Popup";

export class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });

    this._yesButton = this._popupElement.querySelector(
      "#modal-confirm-yes-button"
    );
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  open() {
    this._yesButton.disabled = false;
    this._yesButton.classList.remove("modal__save_disabled");
    this._yesButton.addEventListener("click", this._handleYesButtonClick, {
      once: true,
    });
    super.open();
  }

  close() {
    this._yesButton.removeEventListener("click", this._handleYesButtonClick);

    super.close();
  }

  _handleYesButtonClick = (event) => {
    event.preventDefault();
    this._handleSubmit();
  };
}
