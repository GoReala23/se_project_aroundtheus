// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description")
// const newTitle = document.querySelector(
//   "#modalprofile-title-input"
// ).textContent;
// const newDescription = document.querySelector(
//   "#modal-profile-description-input"

import { profileDescription } from "../utils/constants";

// );
export class UserInfo {
  constructor({ profileTitleSelector, ProfileDescriptionSelector }) {
    this.profileTitleSelector = profileTitleSelector;
    this.ProfileDescriptionSelector = ProfileDescriptionSelector;
    this._profileTitleElement = document.querySelector(".profile__title");
    this._profileDescriptionElement = document.querySelector(
      ".profile__description"
    );
  }

  getUserInfo() {
    return {
      name: this._profileTitleElement.textContext,
      job: this._profileDescriptionElement.textContext,
    };
  }

  setUserInfo(name, job) {
    this._profileTitleElement.textContext = name;
    this._profileDescriptionElement.textContext = job;
  }
}
