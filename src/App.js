import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';

import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import AddContact from './components/contacts/AddContact';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { format } from 'path';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            {/* <AddContact></AddContact> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
