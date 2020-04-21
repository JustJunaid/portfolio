import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"

const LinkStyle = {
  background: "white",
  borderRadius: "10rem",
  padding: "10px 38px 10px",
  fontSize: 13,
  color: "#fff",
  backgroundColor: "#50a1ff",
  border: "2px solid yellowgreen",
  display: "inline-block",
  fontWeight: 600,
  textAlign: "center",
  verticalAlign: "middle",
  margin: "1rem",
  boxShadow:
    "0 8px 16px 0 rgba(154, 205, 50, 0.2), 0 6px 20px 0 rgba(154, 205, 50, 0.19)",
}
const ActiveLinkStyle = {
  ...LinkStyle,
  pointerEvents: "none",
  transform: "none",
}

const NavLinks = [
  {
    to: "/",
    text: "HOME",
  },
  {
    to: "/about",
    text: "ABOUT",
  },
  {
    to: "/portfolio",
    text: "PORTFOLIO",
  },
  {
    to: "/contact",
    text: "CONTACT",
  },
]

export default function Navbar() {
  return (
    <div class="navigation">
      <img
        style={{ height: 120, clipPath: "inset(25%)", marginLeft: -25 }}
        src="/assets/img/logo.jpeg"
        alt=""
      />
      <input
        type="checkbox"
        class="navigation__checkbox"
        id="navigation-toggle"
      />
      <label for="navigation-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          {NavLinks.map(({ to, text }) => (
            <li>
              <Link
                to={to}
                style={LinkStyle}
                activeStyle={ActiveLinkStyle}
                activeClassName="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
