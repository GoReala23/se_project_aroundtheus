const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

console.log(initialCards);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardsWrap = document.querySelector(".cards__list");
const editProfilemodal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditForm = editProfilemodal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const cardElement = document.querySelector(".card");

// Buttons
const openProfileEditButton = document.querySelector("#profile-edit-button");
const openAddNewCardButton = document.querySelector(".profile__add-button");
const profileModalSaveButton = editProfilemodal.querySelector(".modal__save");
const likeButton = document.querySelector(".card__like-button");
console.log(".card__like-button");

const closePopup = function closePopup(modal) {
  modal.classList.remove("modal_opened");
};
const closeAddButtonPupUp = addCardModal.querySelector(
  "#modal-close-add-button"
);
const closeEditProfilePupUp = editProfilemodal.querySelector(
  "#modal-close-button"
);

// Form Data

const profileTitle = document.querySelector(".profile__title");
const profileTitleInput = document.querySelector("#modal-title-input");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = document.querySelector(
  "#modal-description-input"
);

const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const cardListEl = document.querySelector(".cards__list");

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(editProfilemodal);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend.cardElement;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;

  const cardElement = getCardElement({ name, link }, cardsWrap);
  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  const imagePreviewModal = document.querySelector("#modal-preview-img");
  cardImageEl.addEventListener("click", () => {
    const previewImageEl = imagePreviewModal.querySelector(".modal__image");
    const previewImageTitleEl =
      imagePreviewModal.querySelector(".modal__img-title");
    previewImageEl.src = cardData.link;
    previewImageEl.alt = cardData.name;
    previewImageTitleEl.textContent = cardData.name;
    console.log(previewImageTitleEl.textContent);
    console.log(cardData.name);
    openModal(imagePreviewModal);
  });

  const previewClose = imagePreviewModal.querySelector(".modal__close");
  previewClose.addEventListener("click", () => {
    imagePreviewModal.classList.remove("modal_opened");
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

closeEditProfilePupUp.addEventListener("click", () =>
  closePopup(editProfilemodal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

openProfileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfilemodal);
});

addCardForm.addEventListener("submit", handleAddCardFormSubmit);
openAddNewCardButton.addEventListener("click", () => openModal(addCardModal));

closeAddButtonPupUp.addEventListener("click", () => closePopup(addCardModal));

profileModalSaveButton.addEventListener("click", () =>
  closePopup(editProfilemodal)
);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
