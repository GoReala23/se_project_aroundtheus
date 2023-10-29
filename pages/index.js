import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(initialCards, "#card-template");
// profile code

// cardImage Code
const previewImageModal = document.querySelector("#modal-preview-img");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardsWrap = document.querySelector(".cards__list");

const cardElement = document.querySelector(".card");

// Buttons
const openProfileEditButton = document.querySelector("#profile-edit-button");
const openAddNewCardButton = document.querySelector(".profile__add-button");
const modalCloseButton = document.querySelector(".modal__close");

const likeButton = document.querySelector(".card__like-button");

// Form Data

const profileTitle = document.querySelector(".profile__title");
const profileTitleInput = document.querySelector("#modal-profile-title-input");
const profileDescription = document.querySelector(".profile__description");
const profileDescriptionInput = document.querySelector(
  "#modal-profile-description-input"
);

// );

// delete modal containers maybe, not needed//

// const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
// const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

const cardListEl = document.querySelector(".cards__list");

const cardSelector = cardTemplate;

// const editFormElement = editProfileModal.querySelector(".modal__form");
// const addCardElement = addCardModal.querySelector(".modal__form");

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOverlay);
  modal.addEventListener("click", handleClose);
}

const closePopup = (modal) => {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOverlay);
};

function handleClose(event) {
  if (event.target === modalCloseButton) closePopup("modal_opened");
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector("modal_opened"));
  }
}

function handleOverlay(e) {
  if (e.target === e.currentTarget) closePopup(e.currentTarget);
}

// code above may suffice for code below

// closeAddButtonPupUp.addEventListener("click", () => closePopup(addCardModal));

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(editProfileModal);
}

// // function renderCard(data, wrapper) {
// //   );

//   wrapper.prepend(card.generateCard());
//   //   const cardElement = getCardElement(cardData);
//   //   cardListEl.prepend(cardElement);
// }

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;

  const cardElement = getCardElement({ name, link }, cardsWrap);
  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
  addCardForm.reset();
}

//card creation

function generateCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const card = new Card(cardData, "#card-title", (name, link) => {
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    openModal(previewImageModal);
    return card.getView();
  });
}

// VALIDATION

const defaultFormConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__span_opened",
};

const editProfileModal = document.querySelector("#edit-modal");
const profileEditForm = editProfileModal.querySelector(".modal__form");
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = addCardModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);
const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);

editFormValidator.enableValidation(profileEditForm, defaultFormConfig);
addFormValidator.enableValidation(addCardForm, defaultFormConfig);

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  // const deleteButton = cardElement.querySelector(".card__delete-button");
  // deleteButton.addEventListener("click", () => {
  //   cardElement.remove();
  // });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

openProfileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

addCardForm.addEventListener("submit", handleAddCardFormSubmit);
openAddNewCardButton.addEventListener("click", () => openModal(addCardModal));

initialCards.forEach((data) => generateCard(data, cardsWrap));
