export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this.renderer = renderer;
    this._container = container;

    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((data) => {
      this.renderer(data);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
