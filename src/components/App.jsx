import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      return JSON.parse(contacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkNameInContacts = nameValue => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === nameValue.toLowerCase()
    );
  };

  const doOnSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (checkNameInContacts(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    setContacts(prevState => [...prevState, newContact]);
    return true;
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const contactsWithFilter = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={doOnSubmit} />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />

          <ContactList items={contactsWithFilter()} onDelete={contactDelete} />
        </>
      )}
      <GlobalStyle />
    </div>
  );
};
