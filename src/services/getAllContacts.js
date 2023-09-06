const URL = "https://playground.4geeks.com/apis/fake/contact/agenda/personal";

export const getAllContacts = () => {
  return fetch(`${URL}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener los contactos: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};
