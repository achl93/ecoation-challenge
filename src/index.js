import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import Home from './components/App/Home';
import App from './components/App/App';
import Login from './components/App/Login';
import Register from './components/App/Register';

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          component={Home}
          exact path='/'
        />
        <Route
          component={App}
          path='/app'
        />
        <Route
          // url='http://localhost:8080/login'
          component={Login}
          path='/login'
        />
        <Route
          // url='http://localhost:8080/register'
          component={Register}
          path='/register'
        />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
