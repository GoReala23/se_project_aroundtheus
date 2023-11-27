import { modalCloseButtons, openButtons } from "../utils/constants.js";

console.log(modalCloseButtons);

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup

    this._popupElement.classList.add("modal_opened");
    document.addEventListener("click", this.close);

    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlay);
  }

  close() {
    modalCloseButtons.forEach((button) => {
      const popup = button.closest(".modal");

      button.addEventListener("click", () => {
        popup.classList.remove("modal_opened");
      });
    });
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlay);
  }

  _handleEscClose(event) {
    // listens for escape button
    // const openedPopup = document.querySelector("modal_opened");
  }
  _handleOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this.open();

    this.close();

    // modalCloseButtons.addEventListener("click", () => {
    //   close();
    // });

    // openButtons.addEventListener("click", () => {
    //   this.open();
    // });
  }
}
