// constructor({ formElement, settings }) {
//   this._inputSelector = settings.inputSelector;

//   this._submitButtonSelector = settings.submitButtonSelector;
//   this._inactiveButtonClass = settings.inactiveButtonClass;
//   this._inputErrorClass = settings.inputErrorClass;
//   this._errorClass = settings.errorClass;

//   this._formElement = formElement;
// }

// const defaultFormConfig = {
//   formSelector: ".modal__form",

//   inputSelector: ".modal__input",

//   submitButtonSelector: ".modal__save",

//   inactiveButtonClass: "modal__save_disabled",

//   inputErrorClass: "modal__input_type_error",

//   errorClass: "modal__span_opened",
// };

class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;

    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._inputElements = [
      ...this._formElement.querySelectorAll(".modal__input"),
    ];

    this._errorMessageElement = document.querySelector(".modal__span");
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._errorMessageElement.textContent = inputElement.validationMessage;
    this._errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    this._errorMessageElement.textContent = "";
    this._errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return !this._inputElements.every((inputElement) => {
      return inputElement.validity.valid;
    });
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  // function hasInvalidInput(inputList) {
  //   return !inputList.every((inputEl) => inputEl.validity.valid);
  // }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
