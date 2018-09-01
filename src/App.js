import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div >
        <Contact />
      </div>
     
    );
    // return React.createElement('div', null, 
    // React.createElement('h1', {className: 'display-1'}, 'Hello Guys'))
  }
}

export default App;
