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

// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;

// // Wrappers

// const cardsWrap = document.querySelector(".cards__list");

// const cardElement = document.querySelector(".card");

//

// Form Data

// const "#modal-profile-title-input" = document.querySelector("#modal-profile-title-input");

// const profileDescriptionInput = document.querySelector(
//   "#modal-profile-description-input"
// );

const addCardForm = document.querySelector("#add-modal-form");
const addCardModal = document.querySelector("#add-card-modal");
const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

const cardListEl = document.querySelector(".cards__list");
const cardTitle = document.querySelector(".card__title");
const defaultFormConfig = {
  formSelector: ".modal__form",

  inputSelector: ".modal__input",

  submitButtonSelector: ".modal__save",

  inactiveButtonClass: "modal__save_disabled",

  inputErrorClass: "modal__input_type_error",

  errorClass: "modal__span_opened",
};

const editPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: handleProfileEditSubmit,
});
const editProfileModal = document.querySelector("#edit-modal");
const editUserInfo = new UserInfo({
  nameSelector: "#modal-profile-title-input",
  jobSelector: "#modal-profile-description-input",
});
const imagePopup = new PopupWithImage({
  popupSelector: "#modal-preview-img",
  handleImageClick: handleImageClick,
});
const imagePreviewModal = document.querySelector("#modal-preview-img");

const openAddNewCardButton = document.querySelector(".profile__add-button");

const popup = new Popup({ popupSelector: ".modal" });

const cardImage = document.querySelector(".modal__image");

const profileEditForm = document.querySelector("#edit-modal-form");
const section = new Section(
  { items: initialCards, renderer: generateCard },
  cardListEl
);

function handleAddCardFormSubmit() {
  // event.preventDefault();

  const cardUrlInput = document.querySelector(".modal__input_type_url");

  const name = cardTitleInput.value;

  const link = cardUrlInput.value;

  section.addItem(name, link);

  addCardPopup.close(addCardModal);

  addFormValidator.disableButton();

  addFormValidator.resetValidation();
}

function generateCard(cardData) {
  const card = new Card(cardData, "#card-template", () => {
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    initialCards.name = cardData.name;
  });

  return card.getView();
}
function handleImageClick(data) {
  imagePopup.open(data);
}

function handleProfileEditSubmit(evt) {
  // evt.preventDefault();
  editFormValidator.disableButton();

  editUserInfo.setUserInfo("title", "job");

  editPopup.close();
}

// addCardForm.addEventListener("submit", handleAddCardFormSubmit);

imagePreviewModal.addEventListener("click", () => {
  handleImageClick();
});

profileAddButton.addEventListener("click", () => {
  addCardPopup.open();
});
openAddNewCardButton.addEventListener("click", () => addCardPopup.open());
addCardPopup.setEventListeners();

profileEditButton.addEventListener("click", (event) => {
  event.preventDefault;
  editUserInfo.getUserInfo();
  editPopup.open();
});

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);

editPopup.setEventListeners();

popup.setEventListeners();
const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);
const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
section.renderItems();

//image pop up

// section

// user

//handlers

// userInfo

// image  modal

//card creation

// new card

// initialCards.forEach((data) => {
//   const cardEl = generateCard(data, cardsWrap);

//   cardListEl.prepend(cardEl);
// });

// add

// edit

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
