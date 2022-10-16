import React from 'react';
// import css from '../ContactForm/ContactForm.module.css';

// import { nanoid } from 'nanoid';
import { Input } from 'components/Input/Input';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(10),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    this.props.onSubmit(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <Input
          type="text"
          label="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Input
          type="tel"
          label="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
