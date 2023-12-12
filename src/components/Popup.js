export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this._closeButton = document
      .querySelector(popupSelector)
      .querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("click", this._handleOverlay);
    document.removeEventListener("keyup", this._handleEscClose);
    document.removeEventListener("click", this.close);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      console.log("ESCAPE");
      this.close();
    }
  };

  _handleOverlay = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", this.close);

    document.addEventListener("keyup", this._handleEscClose);

    document.addEventListener("click", this._handleOverlay);
  }
}
