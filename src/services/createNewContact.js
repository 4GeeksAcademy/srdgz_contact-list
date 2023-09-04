export const createNewContact = (id, full_name, email, phone, address) => {
  let raw = JSON.stringify({
    full_name: full_name,
    email: email,
    agenda_slug: "personal",
    address: address,
    phone: phone,
  });
  return fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
