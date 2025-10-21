import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

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
  state = {
    doctores: [],
  };
  componentDidMount = () => {
    this.loadDoctores();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) this.loadDoctores();
  };
  render() {
    return (
      <div>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
