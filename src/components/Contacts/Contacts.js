import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './contacts.module.css';

function Contacts() {
  const contacts = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.delContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactListItem} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button className="button" id={id} onClick={() => onDelete(id)}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(Contacts);
