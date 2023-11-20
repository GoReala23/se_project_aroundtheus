export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup
    this._popupElement.classList.add("modal_opened");
  }

  close() {
    // closes popup
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose(event) {
    // listens for escape button
    const openedPopup = document.querySelector(".modal_opened");
    if (evt.key === "Escape") {
      this._popupElement.classList.remove("modal_opened");
    }
  }

  setEventListeners(event) {
    if (event.key === "Escape") {
      this._handleEscClose();
    }
  }
}
