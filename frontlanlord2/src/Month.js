import React, { Component } from 'react';

class Month extends Component {
  constructor(props) {
    super (props);
  }

  renderPayments(){
    var payments=[];
    payments= this.props.tenants[0].payments;
     return payments.map(
      (payment)=>{
        return  payments.month
      }
    );
  }

  render() {
    return (
      <th>
      {this.renderPayments()}
      </th>
    );
  }
}

export default Month;
