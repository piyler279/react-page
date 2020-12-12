import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
              <div className="col s5 brand-logo center black-text">
              <i className="material-icons">code</i>
              MERN
              </div>
          </div>
        </nav>
      </div>
    );
  }
}export default Navbar;