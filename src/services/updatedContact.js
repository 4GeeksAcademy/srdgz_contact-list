export const updateContact = (id, full_name, email, phone, address) => {
  return fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
    body: JSON.stringify({
      full_name: full_name,
      email: email,
      agenda_slug: "agendadelaura",
      address: address,
      phone: phone,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
