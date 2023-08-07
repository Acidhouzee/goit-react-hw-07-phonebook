import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from "./App.module.css";
import { selectError, selectIsLoading } from "redux/selectors";


export function UserForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return(
      <div className={css.form_wrapper}>
          <h2>Phonebook</h2>
          <Form/>           
          <h2>Contacts</h2>
          <Filter/>
          <Contacts/>
          {isLoading && !error &&  <b>Request in progress...</b>}  
      </div>
  ); 
};

export default UserForm;
