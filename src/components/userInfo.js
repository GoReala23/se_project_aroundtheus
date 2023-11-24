// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description")
// const newTitle = document.querySelector(
//   "#modalprofile-title-input"
// ).textContent;
// const newDescription = document.querySelector(
//   "#modal-profile-description-input"
// );
export class UserInfo {
  constructor(profileTitleSelector, profileDescriptionSelector) {
    this._profileTitleElement = profileTitleSelector.querySelector(
      "#modal-profile-title-input"
    );
    this._profileDescriptionElement = profileDescriptionSelector.querySelector(
      "#modal-profile-description-input"
    );
    this._profileTitle = profileTitleSelector.name;
    this._profileDescription = profileDescriptionSelector.name;
  }

  getUserInfo() {
    return {
      title: this._profileTitle.textContext,
      description: this._profileDescription.textContext,
    };
  }

  setUserInfo() {
    this._profileTitleElement.textContext = this.getUserInfo.title;
    this._profileDescriptionElement.textContext = this.getUserInfo.description;
  }
}
