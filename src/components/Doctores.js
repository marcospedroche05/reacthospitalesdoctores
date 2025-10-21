import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DetallesDoctor from "./DetallesDoctor";

export default class Doctores extends Component {
  url = Global.apiDoctores;
  loadDoctores = () => {
    var idhospital = this.props.idhospital;
    var request = "/api/Doctores/DoctoresHospital/" + idhospital;
    axios.get(this.url + request).then((response) => {
      this.setState({
        doctores: response.data,
      });
    });
  };
  seleccionarDoctor = (id) => {
    this.setState({
      doctorSeleccionado: parseInt(id),
    });
  };
  state = {
    doctores: [],
    doctorSeleccionado: 0,
  };
  componentDidMount = () => {
    this.loadDoctores();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      this.loadDoctores();
      this.seleccionarDoctor(0);
    }
  };
  render() {
    return (
      <div className="p-5">
        <br />
        <h1>
          Doctores del hospital{" "}
          <span className="fw-bold">{this.props.idhospital}</span>
        </h1>
        <br />
        <table className="table">
          <thead className=" table-primary">
            <tr className="text-center">
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>ID hospital</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>{doctor.idHospital}</td>
                  <td>
                    <button
                      className="btn btn-info text-white"
                      onClick={() => {
                        this.seleccionarDoctor(doctor.idDoctor);
                      }}
                    >
                      Ver detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        {this.state.doctorSeleccionado != 0 && (
          <DetallesDoctor iddoctor={this.state.doctorSeleccionado} />
        )}
      </div>
    );
  }
}
