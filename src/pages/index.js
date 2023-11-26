import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import "../styles/index.css";
import { UserInfo } from "../components/userInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { cardTitleInput } from "../utils/constants.js";
import Popup from "../components/Popup.js";
import { profileEditButton, profileAddButton } from "../utils/constants.js";

// import ".pages/index.css";

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

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Wrappers

const cardsWrap = document.querySelector(".cards__list");

const cardElement = document.querySelector(".card");

// Buttons

const openAddNewCardButton = document.querySelector(".profile__add-button");

const likeButton = document.querySelector(".card__like-button");

//

// Form Data

const profileTitleInput = document.querySelector("#modal-profile-title-input");

const profileDescriptionInput = document.querySelector(
  "#modal-profile-description-input"
);

const cardListEl = document.querySelector(".cards__list");

//Popup

// add popup //

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

addCardPopup.setEventListeners();

profileAddButton.addEventListener("click", () => {
  addCardPopup.open();
});

// edit popup
const editPopup = new PopupWithForm("#edit-modal", handleProfileEditSubmit);
editPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editUserInfo.getUserInfo;
  editPopup.open();
});

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  editFormValidator.disableButton();

  editUserInfo.setUserInfo();

  editPopup.close(editProfileModal);
}

//ima pop up

const imagePopup = new PopupWithImage(".card__image", handleImageClick);

function handleImageClick(link, name) {
  imagePopup.open(imagePreviewModal);
}

// section
const section = new Section({ items: initialCards, renderer: () => {} });

//handlers

// userInfo
const editUserInfo = new UserInfo(profileTitleInput, profileDescriptionInput);

// image  modal

const imagePreviewModal = document.querySelector("#modal-preview-img");

//card creation

const defaultFormConfig = {
  formSelector: ".modal__form",

  inputSelector: ".modal__input",

  submitButtonSelector: ".modal__save",

  inactiveButtonClass: "modal__save_disabled",

  inputErrorClass: "modal__input_type_error",

  errorClass: "modal__span_opened",
};

const modal = document.querySelector(".modal");

// new card
function generateCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);

  return card.getView();
}

initialCards.forEach((data) => {
  const cardEl = generateCard(data, cardsWrap);

  cardListEl.prepend(cardEl);
});

// forms

const profileEditForm = document.querySelector("#edit-modal-form");
const addCardForm = document.querySelector("#add-modal-form");

const editProfileModal = document.querySelector("#edit-modal");

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

const addCardModal = document.querySelector("#add-card-modal");

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

openAddNewCardButton.addEventListener("click", () => addCardPopup.open());

// VALIDATION

const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);
const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);

editFormValidator.enableValidation();

addFormValidator.enableValidation();

// functions

function openModal(modal) {
  modal.classList.add("modal_opened");

  document.addEventListener("keydown", editPopup.handleEscape());

  modal.addEventListener("click", handleOverlay());
}
function handleOverlay(e) {
  if (e.target === e.currentTarget) popup.close(e.currentTarget);
}
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardUrlInput = document.querySelector(".modal__input_type_url");

  const name = cardTitleInput.value;

  const link = cardUrlInput.value;

  const cardElement = generateCard({ name, link });

  cardsWrap.prepend(cardElement);

  addCardPopup.close(addCardModal);

  addFormValidator.disableButton();

  addCardForm.reset();
}

// function handleClose() {
//   modalCloseButtons.forEach((button) => {
//     const popup = button.closest(".modal");

//     button.addEventListener("click", () => {
//       closePopup(popup);
//     });
//   });
// }

// function closePopup(modal) {
//   modal.classList.remove("modal_opened");

//   document.removeEventListener("keydown", handleEscape);

//   modal.removeEventListener("click", handleOverlay);
// }
