// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description")
// const newTitle = document.querySelector(
//   "#modalprofile-title-input"
// ).textContent;
// const newDescription = document.querySelector(
//   "#modal-profile-description-input"
// );
export class UserInfo {
  constructor({ profileTitleSelector, profileDescriptionSelector }) {
    this._profileTitleElement = document.querySelector(profileTitleSelector);
    this._profileDescriptionElement = document.querySelector(
      profileDescriptionSelector
    );
  }

  getUserInfo() {
    return {
      title: this._profileTitleElement.textContext,
      description: this._profileDescriptionElement.textContext,
    };
  }

  setUserInfo() {
    this._profileTitleElement.textContext = this.getUserInfo.title;
    this._profileDescriptionElement.textContext = this.getUserInfo.description;
  }
}
