import React, { Component } from 'react';

class Worker extends Component {
  constructor(props) {
    super (props);
  }

  renderPayments(){
    const payments = this.props.tenant.payments;
    const listItems = payments.map((payment, index) =>
       <b key={index} style={{color: payment.paid ? 'green' : 'red'}}>{payment.amount+" "}</b>
    );
    return (
      <td>{listItems}</td>
    );
  }


  render() {
    return (
      <tr>
        <td className="WorkerName">{this.props.tenant.tenants[0].name}</td>
        <td className="WorkerPhone">{this.props.tenant.tenants[0].cel}</td>
        <td className="WorkerPhone">{this.props.tenant.tenants[0].email}</td>
        <td className="aptNumber">{this.props.tenant.number}</td>
        {this.renderPayments()}
      </tr>
    );
  }
}

export default Worker;
