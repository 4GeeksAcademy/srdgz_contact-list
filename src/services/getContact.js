export const getContact = (id) => {
  return fetch(`https://playground.4geeks.com/apis/fake/contact${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error al obtener el contacto: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error(`Error al obtener el contacto: ${err}`);
      throw err;
    });
};
