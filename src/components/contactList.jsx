import React, { useContext } from 'react';
import Contact from './contact';
import { useHistory } from "react-router-dom";
import StateContext from '../context.js';

const ConstctList = () => {
    let history = useHistory();

    const context = useContext(StateContext);

    function redirect(i) {
        history.push({
            pathname: '/details',
            state: { userId: i }
        });
    }

    return (
        <div className="contactsContainer">
            {context.contacts.map(
                (contact, i) =>
                    <div key={contact.login.uuid} onClick={() => redirect(i)} className="contact">
                        {contact &&
                            <Contact contact={contact}>
                            </Contact>}
                    </div>
            )}
        </div>
    )
}


export default ConstctList;