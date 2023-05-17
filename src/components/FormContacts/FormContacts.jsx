import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/selectors';
import { contactAdd } from '../../redux/operations';
import s from './FormContacts.module.css';



export default function Form() {
  
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

   
  const handleSubmit = e => {
  e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNameDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    const payload = {
      name: name,
      number: number,
      id: nanoid(),
    };
        isNameDublicated
      ? alert(`${name} is already in contacts!`)
      : dispatch(contactAdd(payload));
    form.reset();
   }; 

   
    return ( 
                
         <form className={s.form} action='' onSubmit={handleSubmit}>
            <h2 className={s.title}>Name</h2>
        <label className={s.form_label} htmlFor="name">
          <input
            type="text"
           name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           id="name"
            />
            </label>
            <h2 className={s.title}>Number</h2>
           <label className={s.form_label} htmlFor="number">
          <input
             id="number"
           type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
            />
            </label>
          <button className={s.form_btn} type="submit">Add contacts</button>
          </form>
         );
      }
    
  
