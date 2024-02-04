export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    console.log(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo(title, about, avatar) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = about;
    if (avatar) {
      this._avatarElement.src = avatar;
    }
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}
