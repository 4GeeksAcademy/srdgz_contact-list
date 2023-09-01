export const getAllContacts = () => {
  return fetch(
    "https://playground.4geeks.com/apis/fake/contact/agenda/personal"
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Algo ha fallado");
      }
      return res.json();
    })
    .then((res) => res)
    .catch((err) => console.log(err));
};
