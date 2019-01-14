import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <div class="navbar-left">
          <button class="navbar-toggler" type="button">☰</button>
          <Link class="navbar-brand" to="/">
            <img class="logo-dark" src="../assets/img/logo-dark.png" alt="logo" />
            <img class="logo-light" src="../assets/img/logo-light.png" alt="logo" />
          </Link>
        </div>

        <section class="navbar-mobile">
          <nav class="nav nav-navbar ml-auto">
            <Link class="nav-link" to="/ruby_card">Smart Card</Link>
            <Link class="nav-link" to="/campus_leader">Campus Leader</Link>
            <Link class="nav-link" to="/career">Careers</Link>
            <Link class="nav-link" to="/about">About Us</Link>
            <Link class="nav-link" to="/contact">Contact Us</Link>
          </nav>

          <span class="navbar-divider"></span>

          <div>
            <Link class="btn btn-sm btn-round btn-primary ml-lg-4 mr-2" to="#">Download App</Link>
          </div>
        </section>

      </div>
    </nav>
    )
  }
}
