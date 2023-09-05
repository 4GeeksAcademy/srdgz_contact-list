export const updateContact = (id, full_name, email, phone, address) => {
  return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: full_name,
      email: email,
      agenda_slug: "personal",
      address: address,
      phone: phone,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error al actualizar el contacto: ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("Error al actualizar el contacto:", err);
      throw err;
    });
};
