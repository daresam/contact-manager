import React, { Component } from 'react'

import Contact from '../../components/Contact/Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Drey Sam',
                    email: 'dsam@gmail.com',
                    phone: '222-222-2222'
                },
                {
                    id: 3,
                    name: 'Temi Dee',
                    email: 'tdee@gmail.com',
                    phone: '333-333-3333'
                }
            ]
        }
    }

    onDeleteContact = (id) => {
        let oldContacts = [
            ...this.state.contacts
        ];
        const  newContacts = oldContacts.filter((contact, index) => contact.id !== +id);
        this.setState({contacts: newContacts});

    }
    render() {
        const {contacts} = this.state;
        return (
        <React.Fragment >
            {contacts.map((contact, index) => (
                <Contact  
                key={contact.id} 
                contact={contact}
                deleteHandler={() => this.onDeleteContact(contact.id)}
            />
            ))}
        </React.Fragment>
        )
    }
}

export default Contacts;
