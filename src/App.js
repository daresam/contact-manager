import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch,   } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Provider from './context';

import Contacts from './containers/Contacts/Contacts';
import Header from './components/layouts/Header/Header';
import AddContact from './components/Contact/AddContact';
import EditContact from './components/Contact/EditContact';
import About from './components/pages/About/About';
import NotFound from './components/pages/404/NotFound';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div >
            <Header branding='Contact Manager' />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route path="/contact/add" component={AddContact}></Route>
              <Route path="/contact/edit/:id" component={EditContact}></Route>
              <Route path="/about" component={About}></Route>
              <Route  component={NotFound}></Route>
            </Switch>
            </div>
          </div>
          </Router>
      </Provider>
     
    );
    // return React.createElement('div', null, 
    // React.createElement('h1', {className: 'display-1'}, 'Hello Guys'))
  }
}


export default App;
