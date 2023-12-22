export default class Api {
  constructor() {
    // constructor body
    //around-api.en.tripleten-services.com/v1 = con
    this._baseUrl = "https://around-api.en.tripleten-services.com/v1";
    this.addform = document.getElementById("#add-modal-form");
  }

  getUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: "e49d7980-6617-4b33-a68a-365a4432a600",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  getCards() {
    fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: "e49d7980-6617-4b33-a68a-365a4432a600",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  editProfile() {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "e49d7980-6617-4b33-a68a-365a4432a600",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: "e49d7980-6617-4b33-a68a-365a4432a600",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }
}
