export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this.renderer = renderer;
    // this._cardSelector = document.querySelector("#card-template");
    this._cardSelector = document.querySelector(cardSelector);
    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((data) => {
      this.addItem(data, this._cardSelector);
    });
  }

  addItem(data) {
    const element = this.renderer(data);

    this._cardSelector.prepend(element);
  }
}
