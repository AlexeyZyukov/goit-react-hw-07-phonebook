import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';
import styles from './form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(contactsOperations.addContact(name, number));

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      name,
      number,
    });
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        <p className={styles.inputName}>Name </p>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.formLabel}>
        <p className={styles.inputName}> Number</p>
        <input
          className={styles.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
}
