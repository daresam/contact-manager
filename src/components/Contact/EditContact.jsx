import React, { Component } from 'react'
import {Consumer} from '../../context';
import TextInput from '../CustomInput/TextInput';
import axios from 'axios';

class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }

    }
    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState(
            {
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
            });
    }
     onUpdateContact = async (dispatch, e) => {
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
            name,
            email,
            phone,
            errors: {}
        };
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'Update_CONTACT', payload: res.data || null})
        

        // Clear Input
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
        this.props.history.push('/');
    
        
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
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={(e) => this.onUpdateContact(dispatch, e)}>
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
                                    <input value="Update Contact" type="submit" className="btn btn-light btn-block"/>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}


export default EditContact