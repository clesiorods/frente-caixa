import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Login from './components/pages/Login';
import ControlPanel from './components/pages/ControlPanel';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/main" component={ControlPanel} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);