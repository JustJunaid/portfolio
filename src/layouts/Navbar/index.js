import React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { handleTrackCustomEvent, NavLinks } from '../../utils'
import ToggleDarkTheme from '../../components/ToggleDarkTheme'
import {
  StyledNavBackground,
  LinkStyle,
  ActiveLinkStyle,
} from './Navbar.styles'
import { useStateValue } from '../../state'

export default function Navbar() {
  const [state, dispatch] = useStateValue()
  return (
    <div className="navigation">
      <img
        style={{ height: 65, margin: '17px 0 10px 5px' }}
        src="/assets/img/JC_logo.svg"
        alt=""
      />
      <ToggleDarkTheme state={state} dispatch={dispatch} />
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navigation-toggle"
      />
      <label
        htmlFor="navigation-toggle"
        className="navigation__button"
        onClick={() => handleTrackCustomEvent('HAMBURGER_ICON')}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <StyledNavBackground
        className="navigation__background"
        darkTheme={state.darkTheme}
      >
        &nbsp;
      </StyledNavBackground>

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
