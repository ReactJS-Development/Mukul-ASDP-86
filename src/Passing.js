import React, { Component } from 'react';

class Passing extends Component {
  
  render() {
    return (
      <div>
         <h3>{this.props.password}</h3>
         <h3>{this.props.Items}</h3>
      </div>
    );
  }
}
export default Passing;