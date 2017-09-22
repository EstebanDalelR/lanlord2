import React, { Component } from 'react';

class WorkersInfo extends Component {
  constructor(props) {
    super (props);
  }

  addEarnings(){


    return (
      <b>0</b>
    );
  }

  render() {
    return (
      <div className = 'WorkersInfo'>
        <p>Este mes se ha pagado: {this.addEarnings()}</p>
        <p>Hay problemas con los papeles de: {this.addEarnings()}</p>
      </div>
    );
  }
}

export default WorkersInfo;
