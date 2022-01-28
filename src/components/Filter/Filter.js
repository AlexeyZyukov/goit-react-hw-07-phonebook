import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <p className="filterTitle">Find contacts by name</p>
      <input
        className="formInput"
        type="text"
        name="filter"
        value={value}
        onChange={event =>
          dispatch(contactsActions.filterContacts(event.currentTarget.value))
        }
      />
    </div>
  );
}
