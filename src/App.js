import React, { Component } from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import './App.css';

import Contacts from './containers/Contacts/Contacts';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div >
        <Header branding='Contact Manager' />
        <div className="container">
          <Contacts/>
        </div>
      </div>
     
    );
    // return React.createElement('div', null, 
    // React.createElement('h1', {className: 'display-1'}, 'Hello Guys'))
  }
}


export default App;
