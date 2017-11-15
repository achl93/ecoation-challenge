import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/App/Home';
import App from './components/App/App';
import Login from './components/App/Login';
import Register from './components/App/Register';
import Current from './components/App/Current';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route
          component={Home}
          exact path='/'
        />
        <Route
          component={App}
          exact path='/app'
        />
        <Route
          component={Login}
          path='/login'
        />
        <Route
          component={Register}
          path='/register'
        />
      </Switch>
    </BrowserRouter>
  </div>
  , document.getElementById('root')
);
