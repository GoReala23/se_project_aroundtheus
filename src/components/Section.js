export default class Section {
  constructor({ items, renderer }, cardElement) {
    this._items = items;
    this.renderer = renderer;
    this._cardElement = cardElement;

    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((data) => {
      this.renderer(data);
    });
  }

  addItem(element) {
    this._cardElement.prepend(element);
  }
}
