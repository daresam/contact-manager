import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Provider from './context';

import Contacts from './containers/Contacts/Contacts';
import Header from './components/layouts/Header/Header';
import AddContact from './components/Contact/AddContact';


class App extends Component {
  render() {
    return (
      <Provider>
        <div >
          <Header branding='Contact Manager' />
          <div className="container">
            <AddContact />
            <Contacts/>
          </div>
        </div>
      </Provider>
     
    );
    // return React.createElement('div', null, 
    // React.createElement('h1', {className: 'display-1'}, 'Hello Guys'))
  }
}


export default App;
