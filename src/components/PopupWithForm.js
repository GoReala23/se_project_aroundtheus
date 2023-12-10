import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(
    { popupSelector, handleFormSubmit } // this is where you declas/setup methods
  ) {
    super({ popupSelector }); // { popupSelector: "#add-card-modal"}

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputs = [...this._popupElement.querySelectorAll("input")];
  }

  close = () => {
    this._popupForm.reset();
    super.close();
    document.removeEventListener("click", this.formSubmit);
  };

  _getInputValue() {
    const inputValues = {};
    this._inputs.forEach((input) => (inputValues[input.name] = input.value));

    return inputValues;
  }

  formSubmit = () =>
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValue());
      this.close();
    });

  setEventListeners() {
    this.formSubmit();
    super.setEventListeners();
  }
}
