import { useDispatch, useSelector } from 'react-redux';
import {selectFilteredContacts} from '../../redux/selectors';
import {deleteContact} from '../../redux/operations';
import s from '../PhonebookList/PhonebookItem.module.css';

// const filterContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export default function PhoneList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();
  

    return (
       <div className={s.item_list}>
        {filteredContacts.map(({ id, name, number }) => (        
          <li className={s.item_text}
            key={id}>
                {name}: {number}             
            <button
              className={s.item_btn}
              onClick={() => dispatch(deleteContact(id))}
              type="button"
             >
    Delete
    </button>
      </li>                  
        ))}
         </div>
  );
};



