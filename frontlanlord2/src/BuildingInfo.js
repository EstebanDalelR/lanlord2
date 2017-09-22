import React, { Component } from 'react';

class BuildingInfo extends Component {
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
      <div>
        <p>Este mes se ha recolectado: {this.addEarnings()}</p>
      </div>
    );
  }
}

export default BuildingInfo;
