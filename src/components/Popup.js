export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
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

  setEventListeners() {
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", () => {
        this.close();
      });
    document.addEventListener("keyup", this._handleEscClose());
  }
}
