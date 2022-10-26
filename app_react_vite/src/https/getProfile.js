import { baseUrl } from "./baseUrl";

export const getProfile = (token) => {
  return fetch(baseUrl + "users", {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Error en el perfil");
      return res.json();
    })
    .then((data) => {
      const { user } = data;
      return user;
    });
};
