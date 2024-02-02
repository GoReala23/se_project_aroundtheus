import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(
    { popupSelector, loadingButtonText, handleFormSubmit } // this is where you declas/setup methods
  ) {
    super({ popupSelector }); // { popupSelector: "#add-card-modal"}

    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupElement.querySelector(".modal__save");
    this._buttonText = this._submitButton.textContent;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._loadingButtonText = loadingButtonText;
    this._inputs = [...this._popupElement.querySelectorAll("input")];
  }

  close = () => {
    this._popupForm.reset();
    super.close();
    this._popupForm.removeEventListener("submit", this.handleSubmit);
  };

  _getInputValue() {
    const inputValues = {};
    this._inputs.forEach((input) => (inputValues[input.name] = input.value));

    return inputValues;
  }

  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }

  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this._handleFormSubmit(this._getInputValue());
  };

  setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleSubmit);

    super.setEventListeners();
  }
}
