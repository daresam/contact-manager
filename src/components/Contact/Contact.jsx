import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {Consumer} from '../../context';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }
  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }
  onEditClick = () => {

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
                  <i onClick={() => this.onEditClick() } className='fas fa-plus text-primary pointer mx-2 '></i>
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
