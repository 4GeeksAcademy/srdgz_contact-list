const url = "https://playground.4geeks.com/apis/fake/contact/agenda/personal";

export const getAllContacts = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener los contactos: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al obtener los contactos: ${error.message}`);
  }
};
