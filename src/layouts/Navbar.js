import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div class="navigation">
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
          <li class="navigation__item">
            <Link to="/" class="navigation__link">
              About
            </Link>
          </li>
          <li class="navigation__item">
            <Link to="/portfolio" class="navigation__link">
              portfolio
            </Link>
          </li>
          <li class="navigation__item">
            <Link href="/contact" class="navigation__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
