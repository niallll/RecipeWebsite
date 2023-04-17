import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
/* import './NavMenu.css'; */

export class NavMenu extends Component {

  render() {
    return (
      <header>
        <Navbar className="navbar" container light>
          <NavbarBrand tag={Link} to="/" className='navbarbrand'>Niall's Recipes</NavbarBrand>
          <div className='navbarlinks'>
            <NavLink tag={Link} className="navlink" to="/fetch-recipes" >Recipies</NavLink>
            <NavLink tag={Link} className="navlink" to="/recipe-new" >New Recipie</NavLink>
            <NavLink tag={Link} className="navlink" to="/how-to" >How To</NavLink>
            <NavLink tag={Link} className="navlink" to="/about">About</NavLink>
            <NavLink tag={Link} className="navlink" to="/login">Login</NavLink>
          </div>
        </Navbar>
      </header>
    );
  }
}