export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo(title, about) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = about;
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}
