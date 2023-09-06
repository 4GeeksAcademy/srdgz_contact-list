export const updatedContact = ({ full_name, email, address, phone, id }) => {
  const data = JSON.stringify({
    full_name: full_name,
    email: email,
    agenda_slug: "personal",
    address: address,
    phone: phone,
  });
  return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al actualizar el contacto: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al actualizar el contacto:", error);
      throw error;
    });
};
