import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Consumer} from '../../context';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch (error) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
    
  }
  onEditClick = (id) => {
    // this.props.history.push('/');
    // this.props.history.push(`/contact/edit/${id}`);
  }

  render() {
    const {contact} = this.props;
    const {showContactInfo} = this.state;
    
    return (
      <Consumer >
        {value => {
          const {dispatch} = value;
          return (
            <div className='card card-body'>
              <h4> {contact.name} 
                <i onClick={() => this.onShowClick() } className='fas fa-sort-down text-sucess pointer'></i>
                <span className='float-right'>
                <Link to={`contact/edit/${contact.id}`}>
                  <i  className='fas fa-pencil-alt text-primary pointer mx-2 '> </i>
                </Link>
                  <i onClick={() => this.onDeleteClick(contact.id, dispatch) } className='fas fa-times text-danger pointer '></i>
                </span>
              </h4>
              {showContactInfo ? (<ul  className='list-group'>
                    <li className='list-group-item'>Email: {contact.email}</li> 
                    <li className='list-group-item'>Phone: {contact.phone}</li>
              </ul>) : null}
          </div>
          );
        } } 
      </Consumer>
    );
  }
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
