import React, {Component} from 'react';
import uuid from 'uuid';

const Context = React.createContext();

//  action = {
//     type: '',
//    payload: any 

// }
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload) 
            };
        case 'ADD_CONTACT': 
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;    
    }
}

export default class Provider extends Component {

    state = {
        contacts: [
            {
                id: uuid(),
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: uuid(),
                name: 'Drey Sam',
                email: 'dsam@gmail.com',
                phone: '222-222-2222'
            },
            {
                id: uuid(),
                name: 'Temi Dee',
                email: 'tdee@gmail.com',
                phone: '333-333-3333'
            }
        ],

        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }

}

 

export const Consumer = Context.Consumer;