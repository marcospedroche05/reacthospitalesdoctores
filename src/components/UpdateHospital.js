import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class UpdateHospital extends Component {
    url = Global.apiHospitales;
    cajaid = React.createRef();
    cajanombre = React.createRef();
    cajadireccion = React.createRef();
    cajatelefono = React.createRef();
    cajacamas = React.createRef();
    updateHospital = (event) => {
        event.preventDefault();
        let request = "webresources/hospitales/put";
        let hospital = {
            idhospital: parseInt(this.cajaid.current.value),
            nombre: this.cajanombre.current.value,
            direccion: this.cajadireccion.current.value,
            telefono: this.cajatelefono.current.value,
            camas: parseInt(this.cajacamas.current.value)
        }
        axios.put(this.url + request, hospital).then(response => {
            this.setState({
                mensaje: "Hospital modificado correctamente"
            })
        })
    }
    state = {
        mensaje: ""
    }   
  render() {
    return (
      <div className='p-5'>
        <h1>Modificar hospital</h1>
        <h2 className='text-success'>{this.state.mensaje}</h2>
        <br/>
        <form onSubmit={this.updateHospital}>
            <label>ID hospital: </label>
            <input type='number' ref={this.cajaid} className='form-control'/><br/>
            <label>Nombre: </label>
            <input type='text' ref={this.cajanombre} className='form-control'/><br/>
            <label>Direccion: </label>
            <input type='text' ref={this.cajadireccion} className='form-control'/><br/>
            <label>Telefono: </label>
            <input type='text' ref={this.cajatelefono} className='form-control'/><br/>
            <label>Camas: </label>
            <input type='number' ref={this.cajacamas} className='form-control'/><br/>
            <button className='btn btn-warning text-light'>Actualizar hospital</button>
        </form>
      </div>
    )
  }
}
