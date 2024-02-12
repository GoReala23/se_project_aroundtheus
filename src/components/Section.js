export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this.renderer = renderer;
    this._container = container;

    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

  setItems(items) {
    this._items = items;
  }
}
