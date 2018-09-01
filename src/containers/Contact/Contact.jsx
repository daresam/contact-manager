import React, { Component } from 'react'
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <h4>John Doe</h4>
        <ul>
            <li>Email: jdoe@gmail.com</li>
            <li>Phone: 555-555-5555</li>
        </ul>
      </div>
    )
  }
}

export default Contact;
