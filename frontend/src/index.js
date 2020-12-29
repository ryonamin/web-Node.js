import * as React from "react";        
import * as ReactDOM from "react-dom"; 
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import {Test1} from "./subpages/test1.js";
import {Test2} from "./subpages/test2.js";

class Router extends React.Component {
  render() {
    return(
      <BrowserRouter>
          <Switch>
            <Route       path='/test1' component={Test1} />
            <Route       path='/test2' component={Test2} />
            <Route exact path='/'      component={Index} />
          </Switch>
      </BrowserRouter>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
       <ul>
          <li><Link to="/test1">test1</Link></li>
          <li><Link to="/test2">test2</Link></li>
       </ul>
    );
  }
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
