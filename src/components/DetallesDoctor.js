import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class DetallesDoctor extends Component {
  url = Global.apiDoctores;
  loadDoctor = () => {
    var idDoctor = this.props.iddoctor;
    var request = "/api/Doctores/" + idDoctor;
    axios.get(this.url + request).then((response) => {
      this.setState({
        doctor: response.data,
      });
    });
  };
  state = {
    doctor: null,
  };
  componentDidMount = () => {
    this.loadDoctor();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.iddoctor != this.props.iddoctor) this.loadDoctor();
  };
  render() {
    return (
      <div>
        <h1>Detalles doctor</h1>
        <br />
        <ul className="list-group">
          {this.state.doctor && (
            <>
              <li className="list-group-item bg-info text-light">ID doctor</li>
              <li className="list-group-item">{this.state.doctor.idDoctor}</li>
              <li className="list-group-item bg-info text-light">Apellido</li>
              <li className="list-group-item">{this.state.doctor.apellido}</li>
              <li className="list-group-item bg-info text-light">
                Especialidad
              </li>
              <li className="list-group-item">
                {this.state.doctor.especialidad}
              </li>
              <li className="list-group-item bg-info text-light">Salario</li>
              <li className="list-group-item">{this.state.doctor.salario}</li>
              <li className="list-group-item bg-info text-light">
                ID hospital
              </li>
              <li className="list-group-item">
                {this.state.doctor.idHospital}
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}
