export const getContact = (id) => {
  return fetch("https://playground.4geeks.com/apis/fake/contact" + id)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};
