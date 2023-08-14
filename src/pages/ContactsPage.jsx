import React, { useEffect } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { selectAuthentificated, selectError, selectIsLoading } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import styles from 'css/Main.module.css'
import css from 'css/Main.module.css';



const ContactsPage = () => {
    const dispatch = useDispatch();
    const authentificated = useSelector(selectAuthentificated);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        if(!authentificated) return;

        dispatch(fetchContacts());
    }, [dispatch, authentificated]);

    return(
        <div className={styles.relative}>
            <div className={css.form_wrapper}>
                <h2>Phonebook</h2>
                <Form/>           
                <h2>Contacts</h2>
                <Filter/>
                {isLoading && !error &&  <Loader/>}  
                <Contacts/>
            </div>
            <div className={styles.container_extra}>
                <UserMenu></UserMenu>
            </div>
        </div>
    );
}

export default ContactsPage;