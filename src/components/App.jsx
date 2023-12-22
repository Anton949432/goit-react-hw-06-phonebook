import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter, addContact, deleteContact } from '../redux/contactSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    dispatch(setContacts(storedContacts));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    dispatch(addContact(contact));
  };

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Телефонна книга</h1>
      <ContactForm contacts={contacts} addContact={addContactHandler} />

      <h2>Контакти</h2>
      <Filter filter={filter} setFilter={(value) => dispatch(setFilter(value))} />
      <ContactList contacts={contacts} onDeleteContact={deleteContactHandler} />
    </div>
  );
};

export default App;




