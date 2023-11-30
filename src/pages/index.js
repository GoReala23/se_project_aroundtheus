import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import "../styles/index.css";
import { UserInfo } from "../components/userInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { card, cardTitleInput } from "../utils/constants.js";
import Popup from "../components/Popup.js";
import { profileEditButton, profileAddButton } from "../utils/constants.js";
import { data } from "autoprefixer";

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

//

// Form Data

// const "#modal-profile-title-input" = document.querySelector("#modal-profile-title-input");

// const profileDescriptionInput = document.querySelector(
//   "#modal-profile-description-input"
// );

const cardListEl = document.querySelector(".cards__list");

//Popup

const popup = new Popup({ popupSelector: ".modal" });
popup.setEventListeners();

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
const editPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});
editPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editUserInfo.getUserInfo();
  editPopup.open();
});

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  editFormValidator.disableButton();

  editUserInfo.setUserInfo();

  editPopup.close();
}

//image pop up

const imagePopup = new PopupWithImage({
  popupSelector: "#modal-preview-img",
  handleImageClick: handleImageClick,
});

// section
const section = new Section(
  { items: initialCards, renderer: generateCard },
  cardListEl
);
section.renderItems();

// user

//handlers

// userInfo
const editUserInfo = new UserInfo({
  nameSelector: "#modal-profile-title-input",
  jobSelector: "#modal-profile-description-input",
});

// image  modal

const imagePreviewModal = document.querySelector("#modal-preview-img");
imagePreviewModal.addEventListener("click", () => {
  handleImageClick();
});
function handleImageClick(data) {
  imagePopup.open(data);
}

//card creation

const defaultFormConfig = {
  formSelector: ".modal__form",

  inputSelector: ".modal__input",

  submitButtonSelector: ".modal__save",

  inactiveButtonClass: "modal__save_disabled",

  inputErrorClass: "modal__input_type_error",

  errorClass: "modal__span_opened",
};

// new card
function generateCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);

  return card.getView();
}

// initialCards.forEach((data) => {
//   const cardEl = generateCard(data, cardsWrap);

//   cardListEl.prepend(cardEl);
// });

// add

const addCardForm = document.querySelector("#add-modal-form");

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);
addFormValidator.enableValidation();

openAddNewCardButton.addEventListener("click", () => addCardPopup.open());
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardUrlInput = document.querySelector(".modal__input_type_url");

  const name = cardTitleInput.value;

  const link = cardUrlInput.value;

  section.addItem(name, link);

  addCardPopup.close(addCardModal);

  addFormValidator.disableButton();

  addFormValidator.reset();
}

// edit
const editProfileModal = document.querySelector("#edit-modal");

const profileEditForm = document.querySelector("#edit-modal-form");

// VALIDATION

const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

editFormValidator.enableValidation();

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
