import { modalCloseButtons, openButtons } from "../../utils/constants.js";
import { handleClose, openModal } from "../../utils/utils,js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup

    this._popupElement.classList.add(".modal_opened");
  }

  close() {
    utils.setEventListeners.handleClose();
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
      utils.setEventListeners.Close();
    });

    openButtons.addEventListener("click", () => {
      this.open();
    });
  }
}
