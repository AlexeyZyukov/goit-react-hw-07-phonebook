import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import contactsAction from '../../redux/contacts/contacts-actions';
import styles from './contacts.module.css';

function Contacts() {
  // const contacts = useSelector(filterContacts);
  const onFilter = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsAction.deleteContact(id));

  useEffect(() => dispatch(fetchContacts(), [dispatch]));

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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
