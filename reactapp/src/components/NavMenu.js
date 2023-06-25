import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
/* import './NavMenu.css'; */

export class NavMenu extends Component {
  render() {
    return (
      <header>
        <Navbar className="navbar" container dark headroom color="dark">
          <NavbarBrand tag={Link} to="/" className="navbarbrand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              className="mr-4"
            >
              <title>Express Eats</title>
              <g
                stroke-linecap="square"
                stroke-width="2"
                fill="none"
                stroke="#5e72e4"
                stroke-linejoin="miter"
                class="nc-icon-wrapper"
                stroke-miterlimit="10"
              >
                <path d="M14.874,44H33.126A21.985,21.985,0,0,0,46,24H2A21.985,21.985,0,0,0,14.874,44Z"></path>{" "}
                <line
                  x1="37.814"
                  y1="14.279"
                  x2="46"
                  y2="2"
                  stroke="#5e72e4"
                  data-cap="butt"
                  stroke-linecap="butt"
                ></line>{" "}
                <line
                  x1="30.43"
                  y1="14"
                  x2="34"
                  y2="4"
                  stroke="#5e72e4"
                  data-cap="butt"
                  stroke-linecap="butt"
                ></line>{" "}
                <path
                  d="M41.659,18a5.981,5.981,0,0,0-10.047-2.066A5.924,5.924,0,0,0,23.059,12.8a5.967,5.967,0,0,0-10.7,1.236C12.236,14.029,12.122,14,12,14a6,6,0,0,0-5.659,4"
                  stroke="#5e72e4"
                ></path>{" "}
                <circle
                  cx="8"
                  cy="9"
                  r="1"
                  fill="#5e72e4"
                  stroke="none"
                ></circle>{" "}
                <circle
                  cx="23"
                  cy="6"
                  r="1"
                  fill="#5e72e4"
                  stroke="none"
                ></circle>{" "}
                <circle
                  cx="18"
                  cy="17"
                  r="1"
                  fill="#5e72e4"
                  stroke="none"
                ></circle>
              </g>
            </svg>
            Express Eats
          </NavbarBrand>

          <div className="navbarlinks">
            <NavLink tag={Link} className="navlink" to="/fetch-recipes">
              Recipies
            </NavLink>
            <NavLink tag={Link} className="navlink" to="/recipe-new">
              New Recipie
            </NavLink>
            <NavLink tag={Link} className="navlink" to="/how-to">
              How To
            </NavLink>
            <NavLink tag={Link} className="navlink" to="/about">
              About
            </NavLink>
            <NavLink tag={Link} className="navlink" to="/login">
              Login
            </NavLink>
          </div>
        </Navbar>
      </header>
    );
  }
}
