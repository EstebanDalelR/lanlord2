import React, { Component } from 'react';
import Worker from './Worker.js';


class Workers extends Component {
  constructor(props) {
    super (props);
  }


  renderWorkers(){
    return this.props.workers.map(
      (t,i)=>{
        return <Worker tenant={t} key={i}/>;
      }
    );
  }


  render() {
    return (
      <div>
        <table className = 'WorkersTable table-hover table-responsive thead-default'>
          <tbody>
            <tr className='TableTittle'>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>ARL</th>
              <th>EPS</th>
            </tr>
            {this.renderWorkers()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Workers;
