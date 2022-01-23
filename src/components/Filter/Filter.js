import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
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
