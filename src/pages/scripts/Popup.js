import { modalCloseButtons, openButtons } from "../../utils/constants.js";
import { handleClose } from "../../utils/utils,js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup

    this._popupElement.classList.add(".modal_opened");
  }

  close() {
    // closes popup
    // this._popupElement.classList.remove("modal_opened");
    // modalCloseButtons.forEach((button) => {
    //   const popup = button.closest(".modal");
    //   button.addEventListener("click", () => {
    //     this._popupElement.classList.remove("modal_opened");
    //   });
    // });
  }

  _handleEscClose(event) {
    // listens for escape button
    const openedPopup = document.querySelector(".modal_opened");
    if (event.key === "Escape") {
      this._popupElement.classList.remove(openedPopup);
    }
  }

  setEventListeners(event) {
    if (event.key === "Escape") {
      this._handleEscClose();
    }

    modalCloseButtons.addEventListener("click", () => {
      utils.handleClose();
    });

    openButtons.addEventListener("click", () => {
      this.open();
    });
  }
}
