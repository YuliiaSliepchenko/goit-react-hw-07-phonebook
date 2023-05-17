import Form from '../components/FormContacts/FormContacts';
import Filter from '../components/FilterName/FilterName';
import PhoneList from '../components/PhonebookList/PhonebookList';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

import s from './App.module.css';


export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
     <Form />
     <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading...</p> }
     <PhoneList/>
    </div>
    );
  }
