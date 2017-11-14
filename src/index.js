import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/App/Home';

render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route
          component={Home}
          path='/'
        />
      </Switch>
    </BrowserRouter>
  </div>
  , document.getElementById('root')
);
