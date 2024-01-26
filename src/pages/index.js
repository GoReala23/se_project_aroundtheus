import Api from "../components/Api.js";
import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";
import "../styles/index.css";

import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { ConfirmPopup } from "../components/ConfirmPop.js";
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
  const api = new Api({
    baseUrl: "https://around-api.en.tripleten-services.com/v1://",
    headers: {
      authorization: "8e58f962-4a24-4e9f-912b-0a765e77e7dc",
      "Content-type": "application/json",
    },
  });
  const cardListEl = document.querySelector(".cards__list");
  const editPicButton = document.getElementById("profile-image-edit-button");
  const changeAvatarModal = document.getElementById("change-avatar-modal");
  const saveButtons = document.querySelectorAll(".modal__save");
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
  const changeAvatarFormValidator = new FormValidator(
    changeAvatarForm,
    defaultFormConfig
  );
  changeAvatarFormValidator.enableValidation();
  editFormValidator.enableValidation();
  addFormValidator.enableValidation();

  const changeAvatarPopup = new PopupWithForm({
    popupSelector: "#change-avatar-modal",
    handleFormSubmit: handleChangeAvatarSubmit,
  });

  const addCardPopup = new PopupWithForm({
    popupSelector: "#add-card-modal",
    handleFormSubmit: handleAddCardFormSubmit,
  });

  const editPopup = new PopupWithForm({
    popupSelector: "#edit-modal",
    handleFormSubmit: handleProfileEditSubmit,
  });

  const confirmDeletePopup = new ConfirmPopup("#modal-confirm-yes");

  const imagePopup = new PopupWithImage({
    popupSelector: "#modal-preview-img",
  });

  const editUserInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__description",
    avatarSelector: ".profile__image",
  });

  const section = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const card = generateCard(data);
        section.addItem(card.view);
      },
    },
    cardListEl
  );

  api
    .getUserInfo()
    .then((UserInfo) => {
      editUserInfo.setUserInfo(UserInfo.name, UserInfo.about, UserInfo.avatar);
    })
    .catch((error) => console.error(`Error fetching user info: ${error}`));

  api
    .getInitialCards()
    .then((cards) => {
      console.log("Initial Cards R:", cards);
      cards.forEach((cardData) => {
        const cardElement = generateCard(cardData);
        section.addItem(cardElement.view);
      });
    })
    .catch((error) => console.error(`Error fetching initial cards: ${error}`));

  // handlers

  saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const saveButtonText = button.textContent;
      button.textContent = "Saving";

      setTimeout(() => {
        button.textContent = saveButtonText;
      }, 1000);
    });
  });
  function handleProfileEditSubmit(inputValues) {
    api
      .editProfile(inputValues.name, inputValues.about)
      .then((userInfo) => {
        editUserInfo.setUserInfo(
          userInfo.name,
          userInfo.about,
          userInfo.avatar
        );
        editPopup.close();
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error instanceof Response) {
          error
            .json()
            .then((body) => {
              console.error("Error response body:", body);
            })
            .catch((jsonError) => {
              console.error("Error parsing JSON from response:", jsonError);
            });
        }
      });
  }

  function handleAddCardFormSubmit(inputValues) {
    console.log(`add form data:`, inputValues);

    api
      .addNewCard({
        name: inputValues.name,
        link: inputValues.link,
      })
      .then((newCard) => {
        const cardElement = generateCard(newCard);
        section.addItem(cardElement.view);
        addCardPopup.close();
      })
      .catch((error) => console.error(`Error:`, error));
  }

  function handleChangeAvatarSubmit(inputValues) {
    const currentProfileInfo = editUserInfo.getUserInfo();
    api
      .changeAvatar(inputValues.link)
      .then((res) => {
        editUserInfo.setUserInfo(
          currentProfileInfo.name,
          currentProfileInfo.about,
          inputValues.link
        );

        changeAvatarPopup.close();
      })
      .catch((error) => {
        console.error("Error changing avatar:", error);
      });
  }
  // const editProfileModal = document.querySelector("#edit-modal");

  // const popup = new Popup({ popupSelector: ".modal" });

  editPicButton.addEventListener("click", () => {
    changeAvatarPopup.open();
  });

  profileAddButton.addEventListener("click", (event) => {
    addFormValidator.resetValidation();

    addCardPopup.open();
  });

  profileEditButton.addEventListener("click", (event) => {
    editFormValidator.resetValidation();
    editPopup.open();
  });

  // changeAvatarForm.addEventListener(`submit`, (event) => {
  //   event.preventDefault();

  //   const avatarUrl = changeAvatarForm.querySelector(".modal__input_type_url");
  //   console.log(avatarUrl);
  //   handleChangeAvatarSubmit({
  //     link: avatarUrl,
  //   });
  // });

  function handleDeleteCard(cardId, cardInstance) {
    api
      .deleteCard(cardId)
      .then(() => {
        cardInstance.remove();
        confirmDeletePopup.close();
      })
      .catch((error) => console.error(`Error:`, error));
  }

  function generateCard(cardData) {
    const card = new Card(
      {
        name: cardData.name,
        link: cardData.link,
        cardId: cardData._id,
        handleImageClick: (data) => {
          imagePopup.open(data.name, data.link);
        },
        handleLikeIcon: () => {
          card.handleLikeIcon();
        },
        handleDeleteCard: () => {
          confirmDeletePopup.setSubmitAction(() => {
            handleDeleteCard(cardData._id, card);
            card.remove();
          });
          confirmDeletePopup.open();
        },
      },

      "#card-template"
    );

    return { view: card.getView(), instance: card };
  }

  section.renderItems();
});
