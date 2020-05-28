import React from 'react';
import ReactDOM from 'react-dom';
import './comp-style/index.css';
import Display from './pages/Display';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './pages/Resume';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Display} />

        <Route path="/resume" component={Resume} />

      </Switch>
    </Router> 
   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
