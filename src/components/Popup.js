import { modalCloseButtons, openButtons } from "../utils/constants.js";
import { handleEscape } from "../utils/utils,js";
import { handleClose } from "../utils/utils,js";

console.log(modalCloseButtons);

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup

    this._popupElement.classList.add("modal_opened");
  }

  close(modal) {
    modalCloseButtons.forEach((button) => {
      const popup = button.closest(".modal");

      button.addEventListener("click", () => {
        popup.classList.remove("modal_opened");
      });
    });
  }

  _handleEscClose(event) {
    // listens for escape button
    // const openedPopup = document.querySelector("modal_opened");
    if (event.target === event.currentTarget) handleEscape();
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);

    // modalCloseButtons.addEventListener("click", () => {
    //   close();
    // });

    // openButtons.addEventListener("click", () => {
    //   this.open();
    // });
  }
}
