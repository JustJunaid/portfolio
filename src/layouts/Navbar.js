import React, { Component } from 'react'
import Link from 'gatsby-link'
import logoLight from '../../static/assets/img/logo-light.png'
import logoDark from '../../static/assets/img/logo-dark.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button">☰</button>
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" src={logoDark}/>
            <img className="logo-light" src={logoLight} />
          </Link>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar ml-auto">
            <Link className="nav-link" to="/ruby_card">Smart Card</Link>
            <Link className="nav-link" to="/campus_leader">Campus Leader</Link>
            <Link className="nav-link" to="/career">Careers</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </nav>

          <span className="navbar-divider"></span>

          <div>
            <Link className="btn btn-sm btn-round btn-primary ml-lg-4 mr-2" to="#">Download App</Link>
          </div>
        </section>

      </div>
    </nav>
    )
  }
}
