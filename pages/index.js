import Card as Card from "../components/Card.js";
import FormValidator as FormValidator from "../components/FormValidator.js";

// from formValidation do later
// const editFormValidator = new FormValidator(settings, editForm);
//const addFormValidator = new FormValidator( settings, addForm);

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

const card = new Card(initialCards, "#card-template");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardsWrap = document.querySelector(".cards__list");
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditForm = document.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector("#add-modal-form");
const cardElement = document.querySelector(".card");
// delete modal containers maybe, not needed//
const containers = document.querySelector(".modal__container");

// Buttons
const openProfileEditButton = document.querySelector("#profile-edit-button");
const openAddNewCardButton = document.querySelector(".profile__add-button");
const profileModalSaveButton = editProfileModal.querySelector(".modal__save");
const likeButton = document.querySelector(".card__like-button");

const closePopup = (modal) => {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOverlay);
};
const closeAddButtonPupUp = addCardModal.querySelector(
  "#modal-close-add-button"
);
const closeEditProfilePupUp = editProfileModal.querySelector(
  "#modal-close-button"
);

// delete modal containers maybe, not needed//
const modalContainer = document.querySelector("#add-card-modal");
const imagePreviewModal = document.querySelector("#modal-preview-img");

const previewClose = imagePreviewModal.querySelector(".modal__close");
previewClose.addEventListener("click", () => {
  closePopup(imagePreviewModal);
});

// Form Data

const profileTitle = document.querySelector(".profile__title");
const profileTitleInput = document.querySelector("#modal-profile-title-input");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = document.querySelector(
  "#modal-profile-description-input"
);

const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const cardListEl = document.querySelector(".cards__list");

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(editProfileModal);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
  //   const cardElement = getCardElement(cardData);
  //   cardListEl.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;

  const cardElement = getCardElement({ name, link }, cardsWrap);
  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
  addCardForm.reset();
}

const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__span_opened",
};

const editFormElement = editProfileModal.querySelector(".modal__form");
const addCardElement = addCardModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(validationSettings, editFormElement);
const addFormValidator = new FormValidator(validationSettings, addCardElement);


function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  // const deleteButton = cardElement.querySelector(".card__delete-button");
  // deleteButton.addEventListener("click", () => {
  //   cardElement.remove();
  // });

  cardImageEl.addEventListener("click", () => {
    const previewImageEl = imagePreviewModal.querySelector(".modal__image");
    const previewImageTitleEl =
      imagePreviewModal.querySelector(".modal__img-title");
    previewImageEl.src = cardData.link;
    previewImageEl.alt = cardData.name;
    previewImageTitleEl.textContent = cardData.name;
    openModal(imagePreviewModal);
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}

function handleOverlay(e) {
  if (e.target === e.currentTarget) closePopup(e.currentTarget);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOverlay);
}

closeEditProfilePupUp.addEventListener("click", () =>
  closePopup(editProfileModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

openProfileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

addCardForm.addEventListener("submit", handleAddCardFormSubmit);
openAddNewCardButton.addEventListener("click", () => openModal(addCardModal));

closeAddButtonPupUp.addEventListener("click", () => closePopup(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
