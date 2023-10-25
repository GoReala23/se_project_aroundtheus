class FormValidator {
  constructor(settings, formElement) {
    // this._formSelector
    this._inputSelector = settings.inputSelector;
    this_.submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage)  {
    const errorElement = this._form.querySelector(`#${inputEl.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _toggleButtonState() {

  }

  _hasInvalidInput() {

  }

  _checkInputValidity() {
    
  }

  
  
   _hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }

  toggleButtonState(this._inputEls, this._submitButton,  this._inactiveButtonClass ) {
    if (hasInvalidInput(inputEls)) {
        this._submitButton.classList.add(inactiveButtonClass);
        this._submitButton.disabled = true;
    } else {
        this._submitButton.classList.remove(inactiveButtonClass);
        this._submitButton.disabled = false;
    }
  }

  _setEventListeners() {
    this.inputEls = Array.from(this._form).querySelector(inputSelector);

    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, rest);
  }
}

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

export default FormValidator;
