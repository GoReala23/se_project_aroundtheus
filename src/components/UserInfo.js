export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.value,
      userJob: this._jobElement.value,
    };
  }

  setUserInfo(title, about) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = about;
  }
}
