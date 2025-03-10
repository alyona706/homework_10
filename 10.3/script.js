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
    return this.contacts.find(contact => contact.name === name);
  },
  add: function(name, phone, email) {
    const newContact = { name, phone, email };
    this.contacts.push(newContact);
    return console.log(this);
  }
};
console.log(contactBook.find('Alice Cooper'));
contactBook.add('Jhon Brown', '+380999999999', 'jhon.brown@mail.com');