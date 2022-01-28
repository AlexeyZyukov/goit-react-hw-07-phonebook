import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

function Contacts() {
  const contacts = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.delContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="contact-list__item" key={id}>
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
