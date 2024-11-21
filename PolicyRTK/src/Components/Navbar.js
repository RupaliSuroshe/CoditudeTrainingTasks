import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid justify-content-center" >
          <Link className="navbar-brand" to="/"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" to="/" style={{margin: '0 30px'}}><strong>Home</strong></Link>
              <Link className="nav-link" to="/user" style={{margin: '0 30px'}}><strong>User Page</strong></Link>
              <Link className="nav-link" to="/policy" style={{margin: '0 30px'}}><strong>Policy</strong></Link>
              <Link className="nav-link" to="/claimpolicy" style={{margin: '0 30px'}}><strong>Claim Policy</strong></Link>
              <Link className="nav-link" to="/claimsettlement" style={{margin: '0 30px'}}><strong>Claim Settlement</strong></Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;