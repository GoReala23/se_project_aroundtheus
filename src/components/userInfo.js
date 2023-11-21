// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description")
// const newTitle = document.querySelector(
//   "#modalprofile-title-input"
// ).textContent;
// const newDescription = document.querySelector(
//   "#modal-profile-description-input"
// );
export class UserInfo {
  constructor({ profileTitle, profileDescription }) {
    this.profileTitle = profileTitle.textContext;
    this.profileDescription = profileDescription.textContext;
  }

  getUserInfo() {
    return this.profileTitle, this.profileDescription;
  }

  setUserInfo(profileTitleInput, profileDescriptionInput) {
    this.profileTitle.textContext = profileTitleInput.value;
    this.profileDescription.textContext = profileDescriptionInput.value;
  }
}
