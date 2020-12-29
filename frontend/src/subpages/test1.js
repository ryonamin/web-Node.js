import * as React from "react";        
import { withRouter } from "react-router";

class Test1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render (){
    return (
      <div>
        <h1>Hello world!</h1>
        <p>A React element can contain single tag. Subcomponents can be added.</p>
        <button onClick={ () => { this.props.history.goBack(); } }> 戻る </button>
      </div>
    );
  }
}

export {Test1};
export default withRouter(Test1)
