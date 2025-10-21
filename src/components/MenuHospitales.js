import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class MenuHospitales extends Component {
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
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            API Hospitales
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/createhospital" className="nav-link">
                  Crear hospital
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Hospitales
                </a>
                <ul className="dropdown-menu">
                  {this.state.hospitales.map((hospital, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          to={"/doctores/" + hospital.idhospital}
                          className="dropdown-item"
                        >
                          {hospital.nombre}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
