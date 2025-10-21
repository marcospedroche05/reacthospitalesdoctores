import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class EliminarHospital extends Component {
    url = Global.apiHospitales;
    cajaid = React.createRef();
    deleteHospital = (event) => {
        event.preventDefault();
        var id = parseInt(this.cajaid.current.value);
        var request = "webresources/hospitales/delete/" + id;
        axios.delete(this.url + request).then(response => {
            this.setState({
                mensaje: "Hospital eliminado correctamente"
            })
        })
    }
    state = {
        mensaje: ""
    }
  render() {
    return (
      <div className='p-5'>
        <h1>Eliminar hospital</h1><br/>
        <h2 className='text-danger'>{this.state.mensaje}</h2>
        <form onSubmit={this.deleteHospital}>
            <label>ID del hospital: </label>
            <input type='number' className='form-control' ref={this.cajaid}/><br/>
            <button className='btn btn-danger text-light'>Eliminar hospital</button>
        </form>
      </div>
    )
  }
}
