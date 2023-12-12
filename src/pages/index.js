import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import "../styles/index.css";
import { UserInfo } from "../components/userInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  card,
  cardTitleInput,
  profileDescription,
  profileTitle,
} from "../utils/constants.js";
import Popup from "../components/Popup.js";
import { profileEditButton, profileAddButton } from "../utils/constants.js";
import { data } from "autoprefixer";

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

const addCardForm = document.querySelector("#add-modal-form");

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: handleAddCardFormSubmit,
});

const cardListEl = document.querySelector(".cards__list");

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
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});
const imagePopup = new PopupWithImage({
  popupSelector: "#modal-preview-img",
});

const popup = new Popup({ popupSelector: ".modal" });

const profileEditForm = document.querySelector("#edit-modal-form");
const section = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = generateCard(data);
      section.addItem(card);
    },
  },
  cardListEl
);

function handleAddCardFormSubmit(inputValues) {
  const addedCard = generateCard({
    name: inputValues.title,
    link: inputValues.URL,
  });

  section.addItem(addedCard);

  addCardPopup.close();
}

function generateCard(cardData) {
  const card = new Card(cardData, "#card-template", () => {
    const name = cardData.name;
    const link = cardData.link;

    imagePopup.open(name, link);
  });

  return card.getView();
}

function handleProfileEditSubmit(inputValues) {
  editFormValidator.disableButton();

  editUserInfo.setUserInfo(inputValues.name, inputValues.description);

  editPopup.close();
}

profileAddButton.addEventListener("click", (event) => {
  addFormValidator.resetValidation();

  addCardPopup.open();
});

profileEditButton.addEventListener("click", (event) => {
  // document.getElementById("modal-profile-title-input").value =
  //   profileTitle.textContent;
  // document.getElementById("modal-profile-description-input").value =
  //   profileDescription.textContent;

  const { profileTitle, profileDescription } = editUserInfo.getUserInfo();

  // profileNameInput.value = userName;
  // profileDescriptionInput.value = userJob;

  userName = profileTitle.textContent;
  userJob = profileDescription.textContent;
  editPopup.open();
});

const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);
const editFormValidator = new FormValidator(profileEditForm, defaultFormConfig);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
section.renderItems();
