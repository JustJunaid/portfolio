import React, { Component } from "react"
import { Link } from "gatsby"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header class="container custom-navbar-header">
      <h1 class="logo">
        <a href="#">Logo</a>
      </h1>
      <ul class="main-nav">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}
