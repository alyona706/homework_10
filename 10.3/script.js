const contactBook = {
  contacts: [
    {
      name: 'Devid Smith',
      phone: '+380994567890',
      email: 'smith.devid@mail.com',
    },
    {
      name: 'Alice Cooper',
      phone: '+380981230987',
      email: 'alice.cooper@mail.com',
    }
  ],
};

function getContact(obj, name) {
  let message;
  const contact = obj.contacts.find(contact => {
    if (contact.name === name) {
      message = contact;
    } else {
      message = 'Контакт не знайдено';
    }
  });
  return console.log(message);
}

function addContact(obj, name, phone, email) {
  const newContact = { name, phone, email };
  obj.contacts.push(newContact);
  return console.log(obj);
}

getContact(contactBook, 'Alice Cooper');
addContact(contactBook, 'Jhon Brown', '+380999999999', 'jhon.brown@mail.com');