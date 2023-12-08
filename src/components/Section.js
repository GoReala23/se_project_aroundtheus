export default class Section {
  constructor({ items, renderer }, cardElement) {
    this._items = items;
    this.renderer = renderer;
    this._cardElement = cardElement;
    // this._cardSelector = document.querySelector(selector);
    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((data) => {
      const card = this.renderer(data);
      this.addItem(card);
    });
  }

  addItem(element) {
    this._cardElement.prepend(element);
  }
}
