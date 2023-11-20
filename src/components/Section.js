export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this.renderer = renderer;
    // this._cardSelector = document.querySelector("#card-template");
    this._cardSelector = document.querySelector(".cards__list");
    this.addItem = this.addItem;
  }

  renderItems() {
    this._items.forEach((data) => {
      const cardElement = this.addItem(data, this._cardSelector);

      cardElement;
    });
  }

  addItem(data) {
    const element = this.renderer(data);

    this._cardSelector.prepend(element);
  }
}
