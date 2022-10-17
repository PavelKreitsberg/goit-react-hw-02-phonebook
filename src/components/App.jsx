import React from 'react';
import css from '../components/App.module.css';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Input } from './Input/Input';
import { nanoid } from 'nanoid';

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

  formSubmitHandler = data => {
    data.id = nanoid(10);
    this.state.contacts.push(data);
    this.setState({ contacts: this.state.contacts });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  deleteContactByClick = event => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== event.target.id
      ),
    });
  };

  render() {
    return (
      <div className={css.app}>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.formSubmitHandler}
            contacts={this.state.contacts}
          />
        </Section>
        <Section title="Contacts">
          <Input
            type="text"
            label="find contacts by name"
            name="filter"
            value={this.state.filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInputChange}
          />
          {this.state.filter.length > 0 ? (
            <Filter
              query={this.state.filter}
              list={this.state.contacts}
              onClick={this.deleteContactByClick}
            />
          ) : (
            <ContactList
              list={this.state.contacts}
              onClick={this.deleteContactByClick}
            />
          )}
        </Section>
      </div>
    );
  }
}
