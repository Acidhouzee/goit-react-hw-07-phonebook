import React from "react";
import { useDispatch } from 'react-redux';
import { filterContacts } from "redux/filterSlice";
import css from '../Filter/Filter.module.css'

const Filter = () => {

    const dispatch = useDispatch();

    const filterName = event => {
        const value  = event.target.value.toLowerCase();
        dispatch(filterContacts(value));
    };
    
    return (
        <div className="contacts-filter">
            <h3>Find contacts by name:</h3>
            <input
                className={css.filter_input}
                type="text"
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                placeholder='Filter name'
                onChange={filterName}
            />
        </div>  
    )
};

export default Filter;