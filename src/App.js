import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';
import styles from './components/styles.module.css';

export default function App() {
  return (
    <div className={(styles.container, styles.wrapper)}>
      <h1 className="title">Phone book</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
