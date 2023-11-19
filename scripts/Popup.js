export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupElement;
  }

  open() {
    //opens popup
  }

  close() {
    // closes popup
  }

  _handleEscClose() {
    // listens for escape button
  }

  setEventListeners() {}
}
