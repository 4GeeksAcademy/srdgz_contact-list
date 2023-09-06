export const deleteContact = ({ id }) => {
  return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Request Error");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);

      return response;
    })
    .catch((error) => console.log(error));
};
