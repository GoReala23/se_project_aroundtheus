export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("click", this.setEventListeners);
  }

  // const close = () {
  //   this._popupElement.classList.remove("modal_opened");
  //   document.removeEventListener("click", this.close);
  //   document.removeEventListener("click", this._handleEscClose);
  // }

  _handleEscClose = () => {
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        this.close();
        console.log(event);
      }
    });
  };

  _handleOverlay = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", () => {
        this.close();
      });
    document.addEventListener("keyup", this._handleEscClose());
    document.addEventListener("click", this._handleOverlay);
  }
}
