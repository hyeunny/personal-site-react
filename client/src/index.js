import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import App from './App';
import NotFound from './NotFound';
import Home from './Home';
import DirtyTestPage from './DirtyTestPage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="test" component={DirtyTestPage}/>
        <Route path="*" component={NotFound}/>
    </Router>),
  document.getElementById('root')
);
