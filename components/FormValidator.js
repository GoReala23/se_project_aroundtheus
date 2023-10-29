class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  //   _toggleButtonState() {

  //   }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid);
  }

  _hideInputError(inputElement) {
    const errorMessageEl = this._element.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      return showInputError(formEl, inputEl, options);
    }
    hideInputError(formEl, inputEl, options);
  }

  toggleButtonState(inputElement) {
    if (hasInvalidInput(inputElement)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this.inputElements = Array.from(this._formElement).querySelector(
      this._inputSelector
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    inputElement.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValiditycheckInputValidity(
          formElement,
          inputElement,
          options
        );
        this.toggleButtonState(inputElement);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      checkInputValidity();
    });
    this.setEventListeners(formElement, rest);
  }
}

const editForm = document.querySelector("#edit-modal-form");
const addForm = document.querySelector("#add-modal-form");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__span_opened",
};

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);

new FormValidator();

export default FormValidator;
