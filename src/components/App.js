import React from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleContact = (name, number) => {
    let isNameUnique = false;
    const { contacts } = this.state;
    isNameUnique = contacts.some(elem => elem.name === name);
    if (!isNameUnique) {
      this.setState(state => ({
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      }));
    } else {
      alert('This contact already exist');
    }
  };

  handleRemoveContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(elem => elem.id !== id),
      };
    });
  };

  filterChange = filter => {
    this.setState(state => ({
      filter: filter,
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter handleChange={this.filterChange}></Filter>
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}
