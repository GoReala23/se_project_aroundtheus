import Api from "../components/Api.js";
import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";
import "../styles/index.css";

import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { UserInfo } from "../components/userInfo.js";
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

document.addEventListener(`DOMContentLoaded`, () => {
  const api = new Api({});
  const cardListEl = document.querySelector(".cards__list");

  const profileEditForm = document.querySelector("#edit-modal-form");
  const addCardForm = document.querySelector("#add-modal-form");
  const changeAvatarForm = document.querySelector("#change-avatar-form");
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
  const defaultFormConfig = {
    formSelector: ".modal__form",

    inputSelector: ".modal__input",

    submitButtonSelector: ".modal__save",

    inactiveButtonClass: "modal__save_disabled",

    inputErrorClass: "modal__input_type_error",

    errorClass: "modal__span_opened",
  };
  const addFormValidator = new FormValidator(addCardForm, defaultFormConfig);
  const editFormValidator = new FormValidator(
    profileEditForm,
    defaultFormConfig
  );
  editFormValidator.enableValidation();
  addFormValidator.enableValidation();

  const addCardPopup = new PopupWithForm({
    popupSelector: "#add-card-modal",
    handleFormSubmit: handleAddCardFormSubmit,
  });

  const editPopup = new PopupWithForm({
    popupSelector: "#edit-modal",
    handleFormSubmit: handleProfileEditSubmit,
  });

  const confirmDeletePopup = new PopupWithForm({
    popupSelector: "#modal-confirm-yes",
    handleFormSubmit: () => {},
  });

  const imagePopup = new PopupWithImage({
    popupSelector: "#modal-preview-img",
  });

  const editUserInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__description",
  });

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

  // profileEditForm.addEventListener(`submit`, handleProfileEditSubmit);
  // addCardForm.addEventListener(`submit`, handleAddCardFormSubmit);

  api.getUserInfo().then((UserInfo) => {
    editUserInfo.setUserInfo(UserInfo.name, UserInfo.description);
  });

  api.getInitialCards().then((cards) => {
    cards.forEach((card) => {
      const cardElemet = generateCard(card);
      section.addItem(cardElemet);
    });
  });

  // handlers

  function handleProfileEditSubmit(formData) {
    console.log(formData);
    api
      .editProfile(formData.name, formData.description)
      .then((UserInfo) => {
        editUserInfo.setUserInfo(UserInfo.name, UserInfo.description); //UserInfo.description
        editPopup.close();
      })
      .catch((error) => console.error(`Error:`, error));
  }

  function handleAddCardFormSubmit(formData) {
    console.log(`add form data:`, formData);
    api
      .addNewCard(formData)
      .then((newCard) => {
        const cardElement = generateCard(newCard);
        section.addItem(cardElement);
        addCardPopup.close();
      })
      .catch((error) => console.error(`Error:`, error));
  }

  function handleChangeAvatarSubmit(formData) {
    console.log(`Add Form data:`, formData);
    api
      .changeAvatar(formData.avatarUrl)
      .then(() => {
        changeAvatarPopup.close();
      })
      .catch((error) => console.error(`Error:`, error));
  }
  const editProfileModal = document.querySelector("#edit-modal");

  const popup = new Popup({ popupSelector: ".modal" });

  profileAddButton.addEventListener("click", (event) => {
    addFormValidator.resetValidation();

    addCardPopup.open();
  });

  profileEditButton.addEventListener("click", (event) => {
    const profileTitleInput = document.getElementById(
      "modal-profile-title-input"
    );
    const profileDescriptionInput = document.getElementById(
      "modal-profile-description-input"
    );

    const { userName, userJob } = editUserInfo.getUserInfo();

    profileTitleInput.value = userName;
    profileDescription.value = userJob;

    editPopup.open();
  });

  changeAvatarForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const avatarUrl = event.target.querySelector(`#avata-url-input`).value;
    api
      .changeAvatar(avatarUrl)
      .then(() => {})
      .catch((error) => console.error(`Error:`, error));
  });

  function _handleDeleteCard(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {})
      .catch((error) => console.error(`Error:`, error));
  }

  function generateCard(cardData) {
    const card = new Card(cardData, "#card-template", (cardId) => {
      confirmDeletePopup.setSubmit(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            confirmDeletePopup.close();
            card.remove();
          })
          .catch((error) => console.error(`Error:`, error));
      });
      confirmDeletePopup.open();
    });

    return card.getView();
  }
  changeAvatarForm.addEventListener(`submit`, handleChangeAvatarSubmit);

  section.renderItems();
});
