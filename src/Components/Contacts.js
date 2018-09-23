import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

const Contacts = props =>

            <div>
                <List contacts={props.contacts}/>
            </div>;

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
};

export default Contacts;

