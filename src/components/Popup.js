export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("click", close);
    document.addEventListener("click", this._handleEscClose);
    console.log("click");
    console.log(this._popupElement);
  }

  close = () => {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("click", this.close);
    document.removeEventListener("click", this._handleEscClose);
  };

  // const close = () {
  //   this._popupElement.classList.remove("modal_opened");
  //   document.removeEventListener("click", this.close);
  //   document.removeEventListener("click", this._handleEscClose);
  // }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this._popupElement.classList.remove("modal_opened");
    }
  }

  setEventListeners() {
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
