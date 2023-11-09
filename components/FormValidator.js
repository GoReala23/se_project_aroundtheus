class FormValidator {
  constructor(formElement, settings) {
    this._inputSelector = settings.inputSelector;

    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    const errorMessage = document.querySelector(".modal__span");
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      return this._showInputError(inputElement);
    }

    this._hideInputError(inputElement);
  }

  _hasInvalidInput() {
    return !this._inputElements.every(
      (inputElement) => inputElement.validity.valid
    );
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  // function hasInvalidInput(inputList) {
  //   return !inputList.every((inputEl) => inputEl.validity.valid);
  // }

  _toggleButtonState(formElement) {
    if (this._hasInvalidInput(formElement)) {
      this.disableButton();
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
    this.disableButton();
  }
}

export default FormValidator;
