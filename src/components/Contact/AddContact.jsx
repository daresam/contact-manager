import React, { Component } from 'react'
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInput from '../CustomInput/TextInput';

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }

    }
    onAddContact = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        //Validation
        if(name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }
        if(email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }
        if(phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            errors: {}
        };
        dispatch({type: 'ADD_CONTACT', payload: newContact});

        // Clear Input
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    
        
    }

    onInputChange = (e) => {
        const inputVal = e.target.value;
        const inputName = e.target.name;
        if(inputVal.length > 0) {
            this.setState({errors: {}});
        }
        this.setState({[inputName]: inputVal});
    };

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={(e) => this.onAddContact(dispatch, e)}>
                                    <TextInput 
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChangeInput={(e) => this.onInputChange(e)}
                                        error={errors.name}
                                    />
                                    
                                    <TextInput 
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChangeInput={(e) => this.onInputChange(e)}
                                        error={errors.email}
                                    />
                                    <TextInput 
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        value={phone}
                                        onChangeInput={(e) => this.onInputChange(e)}
                                        error={errors.phone}
                                    />
                                    <input type="submit" className="btn btn-light btn-block"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}


export default AddContact