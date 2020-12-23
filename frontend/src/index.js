import * as React from "react";        
import * as ReactDOM from "react-dom"; 

import { Body } from "./views/body.jsx"; 

class Index extends React.Component {
  render(){
    return (
      <div>
        <div className="main">
          <Body/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
