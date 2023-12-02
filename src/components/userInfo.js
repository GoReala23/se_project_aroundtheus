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

  getUserInfo(title, job) {
    // let title = title;
    // let job = job;
    return {
      title: this._profileTitleElement.textContext,
      job: this._profileDescriptionElement.textContext,
    };
  }

  setUserInfo(title, job) {
    this._profileTitleElement.textContext = title;
    this._profileDescriptionElement.textContext = job;
  }
}
