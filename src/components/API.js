export default class Api {
  constructor(baseUrl) {
    // constructor body
    //around-api.en.tripleten-services.com/v1 = con
    this._baseUrl = "https://around-api.en.tripleten-services.com/v1";
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
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }
}
