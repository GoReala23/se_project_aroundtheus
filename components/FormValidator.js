class FormValidator {
  constructor(formElement, settings) {
    this._settings = settings;
    this._inputSelector = settings.inputSelector;

    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(this._formElement, this._inputElement, { this._inputErrorClass, this._errorClass}) {
    const errorElement = this._formElement.querySelector(
      `#${this._inputElement.id}-error`
    );
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(this._formElement, this._inputElement, {this._inputErrorClass, this._errorClass })  {
    const errorMessageElement = this._formElement.querySelector(
      `#${this._inputElement.id}-error`
    );
    this._inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(this._formElement, this._inputElement, this._settings) {
    if (!this._inputElement.validity.valid) {
      return this._showInputError(this._formElement, this._inputElement, this.options);
    }

    this._hideInputError(inputElement);
  }

  _hasInvalidInput(this._inputElements) {
    return !this._inputElements.every(
      (inputElement) => inputElement.validity.valid
    );
  }

  // function hasInvalidInput(inputList) {
  //   return !inputList.every((inputEl) => inputEl.validity.valid);
  // }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
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
        this._checkInputValidity();
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._checkInputValidity();
    });
    this._setEventListeners();
  }
}

// this.inputElements = Array.from(this._formElement).querySelector(
//   this._inputSelector
// );
// this._submitButton = this._formElement.querySelector(
//   this._submitButtonSelector
// );

export default FormValidator;
