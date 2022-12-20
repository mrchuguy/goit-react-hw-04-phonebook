import { Component } from 'react';
import { Form, Input, InputWrap, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    if (onSubmit(name, number))
      this.setState({
        name: '',
        number: '',
      });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputWrap>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Label>Name</Label>
        </InputWrap>
        <InputWrap>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          <Label>Number</Label>
        </InputWrap>
        <InputWrap>
          <Input type="submit" value="Add contact" />
        </InputWrap>
      </Form>
    );
  }
}
