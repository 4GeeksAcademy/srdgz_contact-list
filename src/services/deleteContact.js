export const deleteContact = (id) => {
  return fetch("https://playground.4geeks.com/apis/fake/contact/" + id)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
