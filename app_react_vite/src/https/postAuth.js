import { baseUrl } from "./baseUrl";

export const authSignin = ({ email, password }) => {
  return fetch(baseUrl + "auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Problemas al logear");
      return res.json();
    })
    .then((data) => {
      const { token } = data;
      return token;
    });
};

export const authSignup = ({ username, email, password }) => {
  return fetch(baseUrl + "auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Problemas al logear");
      return res.json();
    })
    .then((data) => {
      const { token } = data;
      return token;
    });
};
