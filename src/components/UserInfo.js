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
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      title: this._nameElement.textContent,
      about: this._jobElement.textContent,
    };
  }

  setUserInfo(title, about) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = about;
  }
}
