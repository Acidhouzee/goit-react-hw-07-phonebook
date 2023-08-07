import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from '../Form/Form.module.css';
import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";


const Form = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = evt => {
        setName(evt.target.value);
    };

    const handleChangeNumber = evt => {
        setNumber(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        if (name.trim() === '' || number.trim() === '') {
            return;
        }

        const existingContact = contacts.find(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
        );

        if(existingContact) {
            alert(`This ${name} is all ready exists!`)
        } else {

            const newContact = {
                name: name,
                number: number
            };

            dispatch(addContact(newContact));
        }

        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return(
        <form className={css.user_form} onSubmit={handleSubmit}>
            <label className={css.user_form_label}>
                Name:
                <input
                    className={css.user_form_input}
                    type="text"
                    name="name"
                    pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChangeName}
                />
            </label>
            <label className={css.user_form_label}>
                Phone:
                <input
                    className={css.user_form_input}
                    type="tel"
                    name="number"
                    pattern="^(\+?[0-9.\(\)\-\s]*)$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChangeNumber}
                />
            </label>

            <button className={css.user_form_button} type="submit">Add Contact</button>
        </form>
    );
}

export default Form;