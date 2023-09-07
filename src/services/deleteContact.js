export const deleteContact = async ({ id }) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/apis/fake/contact/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`Error al eliminar el contacto: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error("Error al eliminar el contacto:", error);
    throw error;
  }
};
