export const updatedContact = async ({
  full_name,
  email,
  address,
  phone,
  id,
}) => {
  try {
    const data = JSON.stringify({
      full_name: full_name,
      email: email,
      agenda_slug: "personal",
      address: address,
      phone: phone,
    });

    const response = await fetch(
      `https://playground.4geeks.com/apis/fake/contact/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error al actualizar el contacto: ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error al actualizar el contacto:", error);
    throw error;
  }
};
