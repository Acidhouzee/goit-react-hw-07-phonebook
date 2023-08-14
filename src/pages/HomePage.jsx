import React from "react";
import phonebookImg from '../images/phonebook.png'
import css from '../css/Main.module.css'

const HomePage = () => {
    return(
        <section>
            <div className={css.container}>
                <h1 className={css.title}>"Contacts Book" is a web application that enables users to conveniently manage their contacts.</h1>
                <p className={css.descr}>The "Contacts Book" helps users store, organize, and retrieve information about their contacts in a user-friendly manner.</p>
                <img className={css.center} src={phonebookImg} alt="phonebook" />
                <ul className={css.list}>
                    <li>
                        <b>Adding New Contacts:</b> Users can add new contacts by providing their name, phone number, email address, and other relevant details. Each contact may have different fields for various types of information.
                    </li>
                    <li>
                        <b>Deleting Existing Contacts:</b> Users have the ability to remove contacts from their address book. After confirming the action, the selected contact will be completely deleted from the database.
                    </li>
                    <li>
                        <b>Name-based Search:</b> The web app provides a quick search feature allowing users to search for contacts by their names. Users can enter a partial or full name, and the app will display relevant results.
                    </li>
                    <li>
                        <b>Visualization of Contacts:</b> The list of contacts can be visually presented as cards displaying information about each contact. This can include images, names, phone numbers, and other data.
                    </li>
                    <li>
                        <b>Authentication and Authorization:</b> To ensure data privacy, the app may require users to register and log in. This ensures that contacts are stored securely and only accessible to authorized users.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default HomePage;