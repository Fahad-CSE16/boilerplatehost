import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter as Router } from '../node_modules/react-router-dom';

import reportWebVitals from './reportWebVitals';
import Contact from './components/contact';

const routing =(
  <Router>
  <div>
  <Route exact path="/" component={App} />
  <Route path="/contact/" component={Contact}/>
  </div>
  </Router>

)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();
