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
  find: function(name) {
    let message;
    const contact = this.contacts.find(contact => {
      if (contact.name === name) {
        message = contact;
      } else {
        message = 'Контакт не знайдено';
      }
    });
    return console.log(message);
  },
  add: function(name, phone, email) {
    const newContact = { name, phone, email };
    this.contacts.push(newContact);
    return console.log(this);
  }
};
contactBook.find('Alice Cooper');
contactBook.add('Jhon Brown', '+380999999999', 'jhon.brown@mail.com');