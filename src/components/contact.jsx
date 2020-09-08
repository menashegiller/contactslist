import React, { Fragment } from 'react';

const Contact = ({ contact }) => {
    const { name, picture } = contact;
    const { first, last } = name;
    return (
        <Fragment >
            <img className='contImg' src={picture.large} alt={last}></img>
            <div className='name'>{`${first} ${last}`}</div>
        </Fragment>
    )
}

export default Contact;