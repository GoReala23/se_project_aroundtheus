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

// profile code

// cardImage Code
// const previewImageModal = document.querySelector("#modal-preview-img");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardsWrap = document.querySelector(".cards__list");

const cardElement = document.querySelector(".card");

// Buttons
const openProfileEditButton = document.querySelector("#profile-edit-button");
const openAddNewCardButton = document.querySelector(".profile__add-button");
const modalCloseButton = document.querySelector(".modal__close");
// modalCloseButton.addEventListener("click", () => {
//   closePopup("modal_opened");
// });
const likeButton = document.querySelector(".card__like-button");
//

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
//

// const addCardElement = addCardModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOverlay);
  modal.addEventListener("click", (e) => handleClose(e, modal));
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOverlay);
  modal.removeEventListener("click", handleClose);
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}

function handleOverlay(e) {
  if (e.target === e.currentTarget) closePopup(e.currentTarget);
}

function handleClose(event, modal) {
  if (event.target.classList.contains("modal__close")) {
    closePopup(modal);
  }
}

function handleImageClick(name, link) {
  openModal(imagePreviewModal);

  imageModal.src = link;
  imagePreviewTitle.alt = name;
  imagePreviewTitle.textContent = name;
}

// image  modal

const imageModal = document.querySelector(".modal__image");
const imagePreviewModal = document.querySelector("#modal-preview-img");
const imagePreviewTitle = document.querySelector(".modal__img-title");

const previewClose = imagePreviewModal.querySelector(".modal__close");
previewClose.addEventListener("click", () => {
  closePopup(imagePreviewModal);
});

imageModal.addEventListener("click", () => {
  openModal(imagePreviewModal);
});

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(editProfileModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector(".modal__input_type_title");
  const cardUrlInput = document.querySelector(".modal__input_type_url");

  const name = cardTitleInput.value;
  const link = cardUrlInput.value;

  // const card = new Card({ name, link }, "#card-template", handleImageClick);
  const cardElement = generateCard({ name, link });

  cardsWrap.prepend(cardElement);
  closePopup(addCardModal);
  addFormValidator.disableButton();

  addCardForm.reset();
}

//card creation

// VALIDATION

const defaultFormConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__span_opened",
};

function generateCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);

  return card.getView();
}

const profileEditForm = document.querySelector("#edit-modal-form");
const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);
const addCardForm = document.querySelector("#add-modal-form");
const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);

editFormValidator.enableValidation(profileEditForm, defaultFormConfig);
addFormValidator.enableValidation(addCardForm, defaultFormConfig);

// new card

// forms

const editProfileModal = document.querySelector("#edit-modal");

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

openProfileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

const addCardModal = document.querySelector("#add-card-modal");

addCardForm.addEventListener("submit", handleAddCardFormSubmit);
openAddNewCardButton.addEventListener("click", () => openModal(addCardModal));

initialCards.forEach((data) => {
  const cardEl = generateCard(data, cardsWrap);
  cardListEl.prepend(cardEl);
});
