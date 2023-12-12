export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userJob: this._jobElement.textContent,
    };
  }

  setUserInfo(title, about) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = about;
  }
}
