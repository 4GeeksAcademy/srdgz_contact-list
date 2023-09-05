export const createNewContact = async (full_name, email, phone, address) => {
  try {
    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/contact",
      {
        method: "POST",
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
      }
    );

    if (!res.ok) {
      throw new Error(
        `Error al agregar el nuevo contacto: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.err(`Error al agregar el nuevo contacto: ${err.message}`);
    throw err;
  }
};
