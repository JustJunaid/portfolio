import React, { Component } from 'react'
import Link from 'gatsby-link'
import logoLight from '../../static/assets/img/logo-light.png'
import logoDark from '../../static/assets/img/logo-dark.png'
import { StaticQuery, graphql } from 'gatsby';

/* eslint-disable */

export default function Navbar() {
  return (
    <StaticQuery 
      query={navlinkQuery}
      render = {data => (
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
            {data.site.siteMetadata.navBar.links.map(element => (
              <a href={element.url} className="nav-link">{element.text}</a>
            ))}
          </nav>

          <span className="navbar-divider"></span>

          <div>
            <Link className="btn btn-sm btn-round btn-primary ml-lg-4 mr-2" to="#">Download App</Link>
          </div>
        </section>

      </div>
    </nav>
    )} />
  )
}

const navlinkQuery = graphql`
  query {
      site {
        siteMetadata {
          navBar {
            links {
              text
              url
            }
          }
        }
      }
  }
`