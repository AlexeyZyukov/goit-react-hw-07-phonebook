import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts-selectors';
import contactsAction from '../../redux/contacts-actions';
import styles from './contacts.module.css';

export default function Contacts() {
  const onFilter = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsAction.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {onFilter.map(({ id, name, number }) => {
        return (
          <li className={styles.contactListItem} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button className="button" onClick={() => onDelete(id)} id={id}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
