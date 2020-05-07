import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { handleTrackCustomEvent, NavLinks } from "../utils"

const LinkStyle = {
  background: "#50a1ff",
  borderRadius: "10rem",
  padding: "10px 38px 10px",
  fontSize: 13,
  color: "#fff",
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
  background: "none",
}

export default function Navbar() {
  return (
    <div className="navigation">
      <img
        style={{ height: 65, margin: "17px 0 10px 5px" }}
        src="/assets/img/JC_logo.svg"
        alt=""
      />
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navigation-toggle"
      />
      <label
        htmlFor="navigation-toggle"
        className="navigation__button"
        onClick={() => handleTrackCustomEvent("HAMBURGER_ICON")}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {NavLinks.map(({ to, text, externalLink }, index) => (
            <li key={index}>
              {externalLink ? (
                <OutboundLink
                  style={LinkStyle}
                  href="https://docs.google.com/document/d/1j2WUgTCgqhP5LnB6z4iFAcrElFzEiFrqCY75qm_HTkI/edit"
                  target="_blank"
                >
                  RESUME
                </OutboundLink>
              ) : (
                <Link
                  to={to}
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                  activeClassName="active"
                  onClick={() => handleTrackCustomEvent(text)}
                >
                  {text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
