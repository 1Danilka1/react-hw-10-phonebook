// import { nanoid } from 'nanoid';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value ));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.main_container}>
      <label className={css.title}>
        Name
      </label>
      <input
        // id={nameInputId}
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name"
        // value={name}
        // onChange={e => {
        //     setName(e.currentTarget.value);
        // }}
      />
      <label className={css.label_text}>
        Number
      </label>
      <input
        // id={telInputId}
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter your number"
        // value={number}
        // onChange={e => {
        //     setNumber(e.currentTarget.value);
        //   }}
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}



  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const dispatch = useDispatch()

  // const nameInputId = nanoid();
  // const telInputId = nanoid();

  // const addContactsHandler = (e) => {
  //   e.preventDefault()

  //   dispatch(addContact(name, number))
  //   setName('')
  //   setNumber('')
  // }


 
  // const formSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ name: name, number: number });
  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };