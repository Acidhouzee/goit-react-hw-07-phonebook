import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from "redux/filterSlice";
import { filteredContacts } from "redux/selectors";

const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(filteredContacts);

    const filterName = event => {
        const value  = event.target.value.toLowerCase();
        dispatch(filterContacts(value));
    };
    
    return (
        <div className="contacts-filter">
            <h3>Find contacts by name:</h3>
            <input
                type="text"
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                value={filter}
                onChange={filterName}
            />
        </div>  
    )
};

export default Filter;