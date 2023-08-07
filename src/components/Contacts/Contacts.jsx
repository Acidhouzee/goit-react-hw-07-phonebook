import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import css from '../Contacts/Contacts.module.css';
import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";

const Contacts = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);


    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    }

    return (
        <div className="feedback-options">
            <ul className={css.feedback_options_ul} >
                {contacts.map(contact => (
                    <li className={css.feedback_options_li} key={contact.id}>
                        {contact.name}: {contact.number}
                        <button className={css.feedback_options_li_button} type="button" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>  
    ); 
};

export default Contacts;