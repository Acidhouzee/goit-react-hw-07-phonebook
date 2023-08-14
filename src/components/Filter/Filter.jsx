import React from "react";
import { useDispatch } from 'react-redux';
import { filterContacts } from "redux/filterSlice";
import { TextField } from "@mui/material";

const Filter = () => {

    const dispatch = useDispatch();

    const filterName = event => {
        const value  = event.target.value.toLowerCase();
        dispatch(filterContacts(value));
    };
    
    return (
        <div>
            <h3>Find contacts by name:</h3>
            <TextField
                margin="normal"
                id="outlined-basic"
                label="Search Contacts..."
                type="text"
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                onChange={filterName}
            />
        </div>  
    )
};

export default Filter;