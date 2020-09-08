import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import StateContext from '../context.js';

const ContactDetails = () => {
    const history = useHistory();
    const locationData = useLocation();
    const context = useContext(StateContext);
    const contact = context.contacts[locationData.state.userId];
    const { name, email, cell, location, picture } = contact || {};
    const { first, last } = name || {};
    const { city, state, country, street } = location || {};
    const { number, name: streetName } = street || {};

    useEffect(() => {
        !contact&&history.goBack();
    });

    return (
        <div>
            <button className='backButton' onClick={() => { history.goBack() }}>{`< Back`}</button>
            {contact && <div className="detailsContainer">
                <img className='contImg' src={picture.large} alt={last}></img>
                <div>{first}</div>
                <div>{last}</div>
                <div>{email}</div>
                <div>{`${streetName} ${number} `}</div>
                <div>{`${city}, ${state}, ${country} `}</div>
                <div>{`${cell}`}</div>
            </div>}
        </div>
    )
}

export default ContactDetails;