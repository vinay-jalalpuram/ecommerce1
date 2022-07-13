import React, { Component } from "react";

class Welcome extends Component {

    render() {
      return <div>
        <h1>Hello from class component {this.props.name}  {this.props.children}</h1>
     </div>
    }
}

export default Welcome;