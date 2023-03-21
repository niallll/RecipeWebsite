import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
/* import './NavMenu.css'; */

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar" container light>
          <NavbarBrand tag={Link} to="/" className='navbarbrand'>Niall's Recipes</NavbarBrand>
          <div className='navbarlinks'>
            <NavLink tag={Link} className="navlink" to="/">Home</NavLink>
            <NavLink tag={Link} className="navlink" to="/counter">Counter</NavLink>
            <NavLink tag={Link} className="navlink" to="/fetch-data">Fetch data</NavLink>
            <NavLink tag={Link} className="navlink" to="/rank-items">Rank items</NavLink>
            <NavLink tag={Link} className="navlink" to="/fetch-recipes">Recipies</NavLink>
          </div>
        </Navbar>
      </header>
    );
  }
}