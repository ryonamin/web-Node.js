import * as React from "react";        

class Test1 extends React.Component {

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
