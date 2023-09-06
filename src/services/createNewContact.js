const contactUrl = "https://playground.4geeks.com/apis/fake/contact/";

export const createNewContact = ({ full_name, email, phone, address }) => {
  const data = JSON.stringify({
    full_name: full_name,
    email: email,
    agenda_slug: "personal",
    address: address,
    phone: phone,
  });
  return fetch(`${contactUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al agregar el nuevo contacto: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};
