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
    this.profileTitle.textContext = profileTitle.textContext;
    this.profileDescription.textContent = profileDescription.textContext;
  }

  getUserInfo() {
    return this.profileTitle, this.profileDescription;
  }

  setUserInfo(profileTitle, profileDescription) {
    this.profileTitleInput.value = this.profileTitle.value;
    this.profileDescriptionInput.value = this.profileDescriptionInput.value;
  }
}
