import * as React from "react";        
import { withRouter } from "react-router";

import { Body } from "./views/body.jsx"; 

class Test2 extends React.Component {
  render(){
    return (
      <div>
        <div className="main">
          <Body/>
          <button onClick={ () => { this.props.history.goBack(); } }> 戻る </button>
        </div>
      </div>
    );
  }
}

export {Test2};
export default withRouter(Test2)
