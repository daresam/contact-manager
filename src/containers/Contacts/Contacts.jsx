import React, { Component } from 'react'

import Contact from '../../components/Contact/Contact';
import {Consumer} from '../../context';

class Contacts extends Component {
    
    onDeleteContact = (id) => {
        let oldContacts = [
            ...this.state.contacts
        ];
        const  newContacts = oldContacts.filter((contact, index) => contact.id !== +id);
        this.setState({contacts: newContacts});

    }
    render() {
        return (
            <Consumer >
                {value => {
                    const {contacts} = value;
                    return (
                        <React.Fragment >
                            <h1 className="display-3">
                            <span className="text-danger">Contact</span> List</h1>
                            {contacts.map((contact, index) => (
                                <Contact  
                                key={contact.id} 
                                contact={contact}
                                deleteHandler={() => this.onDeleteContact(contact.id)}
                            />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer> 
        );
        
    }
}

export default Contacts;
