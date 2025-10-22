import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Hospitales extends Component {
  url = Global.apiHospitales;
  loadHospitales = () => {
    var request = "webresources/hospitales";
    axios.get(this.url + request).then((response) => {
      this.setState({
        hospitales: response.data,
      });
    });
  };
  state = {
    hospitales: [],
  };
  componentDidMount = () => {
    this.loadHospitales();
  };
  render() {
    return (
      <div className="p-5">
        <h1>Hospitales</h1>
        <br />
        <table className="table table-striped table-hover">
          <thead className="text-center">
            <th>ID</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Camas</th>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{hospital.idhospital}</td>
                  <td>{hospital.nombre}</td>
                  <td>{hospital.direccion}</td>
                  <td>{hospital.telefono}</td>
                  <td>{hospital.camas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
