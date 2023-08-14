import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { Button, TextField } from "@mui/material";
import css from 'css/Main.module.css';


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
        <form onSubmit={handleSubmit}>
            <ul className={css.list}>
                <li>
                    <label className={css.user_form_label}>
                        <TextField
                            margin="normal"
                            id="outlined-basic"
                            label="Contact Name"
                            type="text"
                            name="name"
                            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChangeName}
                        />
                    </label>
                </li>
                <li>
                    <label className={css.user_form_label}>
                        <TextField
                            margin="normal"
                            id="outlined-basic"
                            label="Phone number"
                            type="tel"
                            name="number"
                            pattern="^(\+?[0-9.\(\)\-\s]*)$"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChangeNumber}
                        />
                    </label>
                </li>
            </ul>

            <Button variant="contained" sx={{ mt: 2 }} type="submit">Add Contact</Button>
        </form>
    );
}

export default Form;