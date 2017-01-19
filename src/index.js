import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';
import App from './App';
import NotFound from './NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="*" component={NotFound}/>
    </Router>),
  document.getElementById('root')
);
