import React, { Component } from "react"
import { Link } from "gatsby"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header class="container custom-navbar-header">
      <h1 class="logo">
        <Link to="/">Logo</Link>
      </h1>
      <ul class="main-nav">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}
