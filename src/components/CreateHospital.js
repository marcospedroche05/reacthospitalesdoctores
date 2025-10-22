import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class CreateHospital extends Component {
  url = Global.apiHospitales;
  cajaid = React.createRef();
  cajanombre = React.createRef();
  cajaDireccion = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();
  crearHospital = (event) => {
    event.preventDefault();
    let request = "webresources/hospitales/post";
    let id = parseInt(this.cajaid.current.value);
    let camas = parseInt(this.cajaCamas.current.value);
    //EL OBJETO JSON DE REACT DEBE RESPETAR MAYÚSCULAS/MINUSCULAS Y EL NOMBRE DE LAS PROPIEDADES
    let hospital = {
      idhospital: id,
      nombre: this.cajanombre.current.value,
      direccion: this.cajaDireccion.current.value,
      telefono: this.cajaTelefono.current.value,
      camas: camas,
    };
    axios.post(this.url + request, hospital).then((response) => {
      this.setState({
        mensaje: "Hospital insertado correctamente",
        status: true,
      });
    });
  };
  state = {
    mensaje: "",
    status: false,
  };
  render() {
    return (
      <div className="p-5">
        {this.state.status && <Navigate to="/hospitales" />}
        <h1>Create Hopsital</h1>
        <h2 className="text-success">{this.state.mensaje}</h2>
        <br />
        <form onSubmit={this.crearHospital}>
          <label>ID hospital: </label>
          <input className="form-control" ref={this.cajaid} type="text" />
          <br />
          <label>Nombre: </label>
          <input className="form-control" ref={this.cajanombre} type="text" />
          <br />
          <label>Direccion: </label>
          <input
            className="form-control"
            ref={this.cajaDireccion}
            type="text"
          />
          <br />
          <label>Teléfono: </label>
          <input className="form-control" ref={this.cajaTelefono} type="text" />
          <br />
          <label>Camas: </label>
          <input className="form-control" ref={this.cajaCamas} type="text" />
          <br />
          <button className="btn btn-info text-light">Insertar hospital</button>
        </form>
      </div>
    );
  }
}
