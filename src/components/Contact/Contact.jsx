import React, { Component } from 'react'
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }
  onDeleteClick = () => {
    this.props.deleteHandler();
  }
  onEditClick = () => {

  }

  render() {
    const {contact} = this.props;
    const {showContactInfo} = this.state;
    
    return (
      <div className='card card-body'>
        <h4> {contact.name} 
          <i onClick={() => this.onShowClick() } className='fas fa-sort-down text-sucess pointer'></i>
          <span className='float-right'>
            <i onClick={() => this.onEditClick() } className='fas fa-plus text-primary pointer mx-2 '></i>
            <i onClick={() => this.onDeleteClick() } className='fas fa-times text-danger pointer '></i>
          </span>
        </h4>
        {showContactInfo ? (<ul  className='list-group'>
              <li className='list-group-item'>Email: {contact.email}</li> 
              <li className='list-group-item'>Phone: {contact.phone}</li>
        </ul>) : null}
      </div>
    )
  }
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
export default Contact;
