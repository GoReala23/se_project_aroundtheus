Section(
  {
    data: items,
    renderer: (item) => {
      const card = new DefaultCard(item, ".default-card");
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    },
  },
  cardListSelector
);

const horizontalCardList = new Section(
  {
    data: items,
    renderer: (item) => {
      const card = new HorizontalCard(item, ".horizontal-card");
      const cardElement = card.generateCard();
      horizontalCardList.setItem(cardElement);
    },
  },
  cardListSelector
);

const filterList = new Section(
  {
    data: filterButtons,
    renderer: (item) => {
      const filterButton = new FilterButton(
        { data: item },
        filterButtonTemplate
      );
      const filterButtonElement = filterButton.generateButton();
      filterList.setItem(filterButtonElement);
    },
  },
  filterListSelector
);

defaultCardButton.addEventListener("click", () => {
  defaultCardList.renderItems();
});

horizontalCardButton.addEventListener("click", () => {
  horizontalCardList.renderItems();
});

defaultCardList.renderItems();
filterList.renderItems();
